const client = {
  firstName: 'leomar',
  lastName: 'nogueira',
  phone: '123456789',
};

const clientb = client;

console.log(client, clientb);

client.firstName = 'Leomar';
clientb.lastName = 'Nogueira';

console.log(client, clientb);

const clientc = { ...client };

client.firstName = 'leomar';
clientc.firstName = 'LEOMAR';

console.log(client, clientc);
