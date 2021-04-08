const powerRouter = require('express').Router();
const PowerController = require('../controllers/powers.controller');

powerRouter.get('/', PowerController.getPowers);
powerRouter.get('/:powerId', PowerController.getPower);
powerRouter.post('/', PowerController.createPower);
powerRouter.patch('/:powerId/heroes/:heroId', PowerController.addPowerToHero);
powerRouter.patch('/:powerId', PowerController.changePower);
powerRouter.delete('/:powerId', PowerController.deletePower);

module.exports = powerRouter;