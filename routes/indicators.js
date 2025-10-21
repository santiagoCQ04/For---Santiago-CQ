import { Router } from "express";
import httpIndicators from "../controllers/indicators.js";
import { check } from "express-validator";
import validateFields from "../middlewares/ChecksIndicators.js";

const routes = Router();


routes.get("/api/indicators", httpIndicators.getIndicators,);
routes.get("/api/indicators/:id",[
 check("id").isMongoId().withMessage("ID de Indicador no válido").trim(),
    validateFields

] ,httpIndicators.getIndicatorById);
routes.get("/api/indicators/years/:years", [
     check("years").isString().withMessage("Año no válido").trim(),
    validateFields

],httpIndicators.getIndicatorsByYear);
routes.get("/api/groups/:groupsId/indicators", [

    check("groupsId").isMongoId().withMessage("ID de Grupo no válido").trim(),
    validateFields


],httpIndicators.getIndicatorsByGroup);
routes.get("/api/subjects/:subjectsId/indicators", [


] ,httpIndicators.getIndicatorsBySubject);
routes.get("/api/periods/:periodsId/indicators",[

    check("periodsId").isMongoId().withMessage("ID de Período no válido").trim(),
    validateFields

] ,httpIndicators.getIndicatorsByPeriod);
routes.get("/api/modelusers/:usersId/indicators",[
    check("usersId").isMongoId().withMessage("ID de Usuario no válido").trim(),
    validateFields


] ,httpIndicators.getIndicatorsByUser);
routes.post("/api/indicators", [
    check("School").isMongoId().withMessage("ID de Escuela no válido").trim(),
    check("year").isString().withMessage("Año no válido").trim(),
    check("cluster").isMongoId().withMessage("ID de Cluster no válido").trim(),
    check("subject").isMongoId().withMessage("ID de Asignatura no válido").trim(),
    check("description").isString().withMessage("Descripción no válida").trim(),
    check("period").isMongoId().withMessage("ID de Período no válido").trim(),
    check("qualification").isString().withMessage("Calificación no válida").trim(),
    check("userWhoDidIt").isMongoId().withMessage("ID de Usuario no válido").trim(),
    validateFields



],httpIndicators.createIndicator);
routes.put("/api/indicators/:id", [

 check("School").isMongoId().withMessage("ID de Escuela no válido").trim(),
    check("year").isString().withMessage("Año no válido").trim(),
    check("cluster").isMongoId().withMessage("ID de Cluster no válido").trim(),
    check("subject").isMongoId().withMessage("ID de Asignatura no válido").trim(),
    check("description").isString().withMessage("Descripción no válida").trim(),
    check("period").isMongoId().withMessage("ID de Período no válido").trim(),
    check("qualification").isString().withMessage("Calificación no válida").trim(),
    check("userWhoDidIt").isMongoId().withMessage("ID de Usuario no válido").trim(),
    validateFields


],httpIndicators.updateIndicator);
routes.put("/api/indicators/:id/active",[

    check("id").isMongoId().withMessage("ID de Indicador no válido").trim(),
    validateFields

] ,httpIndicators.activeIndicator);
routes.put("/api/indicators/:id/deactive", [

    check("id").isMongoId().withMessage("ID de Indicador no válido").trim(),
    validateFields

],httpIndicators.deactiveIndicator);
routes.delete("/api/indicators/:id", [

    check("id").isMongoId().withMessage("ID de Indicador no válido").trim(),
    validateFields

],httpIndicators.deleteIndicator);

export default routes;