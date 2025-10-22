import indicators from "../models/indicators.js";


  const httpIndicators = {

    getIndicators: async (req, res) =>{
        try {
          const allIndicators= await indicators.find();
          res.status(200).json({message:"Todos los Indicadores", allIndicators});
            
        } catch (error) {
            res.status(500).json({message:"Error al obtener los Indicadores"})
        }
    },

       getIndicatorById: async (req, res) =>{
        try {
            const indicatorsId = req.params.id;
            const indicator = await indicators.findById(indicatorsId);
            res.status(200).json({message:"Indicador por ID", indicator})
        } catch (error) {
            res.status(500).json({message:"Error al obtener el Indicador por ID"})
        }
    },

     getIndicatorsByYear: async (req, res) =>{
        try {

          const indicatorYear = req.params.year
          const indicatorsByYear = await indicators.find({year: indicatorYear})
            res.status(200).json({message:"Indicadores por Año", indicatorsByYear})
        } catch (error) {
            res.status(500).json({message:"Error al obtener los Indicadores por Año"})
        }
    },

    getIndicatorsByGroup: async (req, res) =>{
        try {
            const indicatorGroup = req.params.indicatorGroup
            const indicatorsByGroup = await indicators.find({cluster: indicatorGroup})
            res.status(200).json({message:"Indicadores por Grupo", indicatorsByGroup})
        } catch (error) {
            res.status(500).json({message:"Error al obtener los Indicadores por Grupo"})
        }
    },

     getIndicatorsBySubject: async (req, res) =>{
        try {
            const indicatorSubject = req.params.indicatorSubject
            const indicatorsBySubject = await indicators.find({subject: indicatorSubject})
            res.status(200).json({message:"Indicadores por Asignatura", indicatorsBySubject})
        } catch (error) {
            res.status(500).json({message:"Error al obtener los Indicadores por Asignatura"})
        }
    },

      getIndicatorsByPeriod: async (req, res) =>{
        try {
            const indicatorPeriod = req.params.indicatorPeriod
            const indicatorsByPeriod = await indicators.find({period: indicatorPeriod})
            res.status(200).json({message:"Indicadores por Periodo", indicatorsByPeriod})
        } catch (error) {
            res.status(500).json({message:"Error al obtener los Indicadores por Periodo"})
        }
    },
      getIndicatorsByUser: async (req, res) =>{
        try {
            const indicatorUser = req.params.indicatorUser
            const indicatorsByUser = await indicators.find({user: indicatorUser})
            res.status(200).json({message:"Indicadores por Usuario", indicatorsByUser})

        } catch (error) {
            res.status(500).json({message:"Error al obtener los Indicadores por Usuario"})
        }
    },
      createIndicator: async (req, res) =>{
        try {
            
            const newIndicator = new indicators(req.body);
            const saveIndicator = await newIndicator.save();
            res.status(200).json({message:"Indicador creado correctamente", saveIndicator})
        } catch (error) {
            res.status(500).json({message:"Error al crear el Indicador"})
        }
    },
      updateIndicator: async (req, res) =>{
        try {
            
            const indicatorId = req.params.id;
            const updateindicator = await indicators.findByIdAndUpdate(indicatorId, req.body, {new: true})
            res.status(200).json({message:"Indicador actualizado correctamente", updateindicator})
        } catch (error) {
            res.status(500).json({message:"Error al actualizar el Indicador"})
        }
    },
      activeIndicator: async (req, res) =>{
        try {
            const {id} = req.params;
            const activateIndicador = await indicators.findByIdAndUpdate(
                id,
                {active:true},
                {new:true}
            )
            res.status(200).json({message:"Indicador activado correctamente", activateIndicador})
        } catch (error) {
            res.status(500).json({message:"Error al activar el Indicador"})
        }
    },
     deactiveIndicator: async (req, res) =>{
        try {
             const {id} = req.params;
            const desactivateIndicador = await indicators.findByIdAndUpdate(
                id,
                {active:false},
                {new:true}
            )
            res.status(200).json({message:"Indicador desactivado correctamente", desactivateIndicador})
        } catch (error) {
            res.status(500).json({message:"Error al desactivar el Indicador"})
        }
    },
     deleteIndicator: async (req, res) =>{
        try {
           
            const {id} = req.params;
            const deleteindicator = await indicators.findByIdAndDelete(id)
            res.status(200).json({message:"Indicador eliminado correctamente", deleteindicator})   
        } catch (error) {
            res.status(500).json({message:"Error al eliminar el Indicador"})
        }
    },
    
  }
  export default httpIndicators;