# cypress_concurency_test_example

- On `package.json` we have the script `"cypress:run": "cypress run --record --key [record key] -b chrome --reporter dot --ci-build-id [unique string] --parallel --project ."`
  - parameters
    - `[record key]` you need to get this from your Cypress accout
    - `[unique string]` can be anythings but if the test run completely, You could not use the same one. For the same cluster of test, you need the same key for each if instance.

- On `cypress.config.js`.
  - parameters
    - `projectId` you need yo get this from your Cypress accout]

- After you finish those two above, you can run `npm run cypress:run` (this depends on how many instances. For examples, you can run this command on your 2 terminals at the same time that means you make 2 instances of the cluster or either you can make your own JS async to do this)

- Those a Cypress cluster is going to balance those test files on each instance to run tests themselve.
  
- Then, if Cypress run completely, you need to change the `[unique string]` to a new one (I don't figure out how to not use these three parameters `[record key]`, `[unique string]` and `projectId` for this task).

- You can look at the example result which a cluster is on `test_result_example`.