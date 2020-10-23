Ext.onReady(function(){

    var formSection=Ext.create('Ext.form.Panel',{
        id: 'formSection',
        renderTo: Ext.getBody(),
        items:[{
                xtype: 'textfield',
                fieldLabel: 'Name',
                name: 'name',
                labelAlign: 'bottom',
                cls: 'entryField',
                // flex: 1
               }, {
                xtype: 'textfield',
                fieldLabel: 'Second name',
                name: 'secondName',
                labelAlign: 'bottom',
                cls: 'entryField',
                // flex: 1
        }],       
    });
    formSection.hide();

    var element = Ext.get('mainButton');
    var index = false;
    element.on('click', function(e, target, options){
        index = !index;
        if(index) {
            formSection.show();
        } else {
            formSection.hide();
        }
    }, this);

});
