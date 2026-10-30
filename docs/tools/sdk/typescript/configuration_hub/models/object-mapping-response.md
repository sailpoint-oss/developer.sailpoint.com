# ObjectMappingResponse

# ObjectMappingResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**objectMappingId** | **(optional)** `string` | Id of the object mapping | [default to undefined]
**objectType** | **(optional)** `string` | Type of the object the mapping value applies to | [default to undefined]
**jsonPath** | **(optional)** `string` | JSONPath expression denoting the path within the object where the mapping value should be applied | [default to undefined]
**sourceValue** | **(optional)** `string` | Original value at the jsonPath location within the object | [default to undefined]
**targetValue** | **(optional)** `string` | Value to be assigned at the jsonPath location within the object | [default to undefined]
**enabled** | **(optional)** `boolean` | Whether or not this object mapping is enabled | [default to false]
**created** | **(optional)** `string` | Object mapping creation timestamp | [default to undefined]
**modified** | **(optional)** `string` | Object mapping latest update timestamp | [default to undefined]

