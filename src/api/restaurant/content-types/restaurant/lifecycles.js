module.exports = {
  beforeUpdate(event) {
    const { data, where, select, populate } = event.params;
    data.Address = 'Address added by lifecycle hook trigger';
    // Or
    // event.params.data.Address = 'Some text'; 
  },

  afterCreate(event) {
    const { result, params } = event;

    // do something to the result;
  },
};