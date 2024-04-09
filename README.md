## Location-Weather Example

This example takes two API sources based on Openapi 3 and Swagger, and links between them. It allow
you to query for cities / locations, and include fields for the weather of in that found place.


## Issue

Trying to run `npm run serve` and got this error

ReferenceError: ExampleQueryDocument is not defined
    at getMeshOptions (openapi-location-weather/.mesh/index.ts:3678:77)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)

and according to the documentation, i can allow persisted-operations by adding

persistedOperations:
  allowArbitraryOperations: true
  

https://the-guild.dev/graphql/mesh/docs/guides/persisted-operations
