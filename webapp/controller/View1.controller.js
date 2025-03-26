sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
],

/** 
 * @param {typeof sap.ui.core.mvc.Controller} Controller 
 */

function (Controller,MessageToast) {
    "use strict";

    return Controller.extend("zov.controller.View1", {
        onInit: function () {     
            var oView  = this.getView();
            var oModel = new sap.ui.model.json.JSONModel();
            oModel.setData({"usuario": {"nome": "Marcos"}});
            oView.setModel(oModel);       
        },

        onExibirMensagem: function() {
            var oI18n  = this.getView().getModel("i18n").getResourceBundle();
            var oModel = this.getView().getModel();
            var oData  = oModel.getData();

            var sText  = oI18n.getText("welcomeMsg",[oData.usuario.nome]);
            alert(sText);
        }
    });
});
