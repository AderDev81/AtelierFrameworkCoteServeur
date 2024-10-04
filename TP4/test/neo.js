const neo4j = require('neo4j-driver');
const [user, password] = ["neo4j", "Azerty123@"];
const uri = "bolt://localhost";
const driver = neo4j.driver(uri, neo4j.auth.basic(user, password));
const session = driver.session({database: 'neo4j'});

// It is possible to execute read transactions that will benefit from automatic
// retries on both single instance ('bolt' URI scheme) and Causal Cluster
// ('neo4j' URI scheme) and will get automatic load balancing in cluster deployments
var readTxResultPromise = session.readTransaction(txc => {
  // used transaction will be committed automatically, no need for explicit commit/rollback

  var result = txc.run('MATCH (co:Product) RETURN  co ')
  // at this point it is possible to either return the result or process it and return the
  // result of processing it is also possible to run more statements in the same transaction
  return result
})

// returned Promise can be later consumed like this:
readTxResultPromise
  .then(result => {
    result.records.forEach(record => {
      console.log(record.get('co'))
    })
  })
  .catch(error => {
    console.log(error)
  })
  .then(() => session.close())
