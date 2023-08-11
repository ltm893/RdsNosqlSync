console.log('Loading function');

exports.handler = async (event, context) => {
    //console.log('Received event:', JSON.stringify(event, null, 2));
    event.Records.forEach(record => {
      const { body } = record ; 
      console.log(body) ;
    });
   return; 
    // throw new Error('Something went wrong');
};