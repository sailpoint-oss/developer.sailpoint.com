## OpenAPI

```yaml DELETE /Users/{userId}
openapi: 3.0.1
info:
  description: |
    IdentityIQ REST Endpoint Interface Documentation for SCIM
  version: '8.3'
  title: IdentityIQ SCIM REST API
servers:
  - url: http://localhost:8080/identityiq/scim/v2
    description: IdentityIQ SCIM server basepath and path to API.
paths:
  /Users/{userId}:
    delete:
      description: The endpoint used to delete a User resource. **This is not reversible.**
      operationId: deleteUser
      security:
        - basicAuth: []
      parameters:
        - name: userId
          in: path
          schema:
            type: string
            example: c7c7777c7ef77e77777ee77e7a1f0444
          description: The id of User resource. If **lookupByName** is set to **true**, this path parameter should be set to the **userName** of the User.
          required: true
        - in: query
          name: lookupByName
          schema:
            type: boolean
            example: false
            default: false
          description: 'A boolean value that determines if the User resource will be looked up by userName instead of userId (value in path parameter ''userId''). Setting this query parameter to true will cause the value pulled from the ''userId'' path parameter to be treated as a userName when searching for the resource.<br/><br/>**Example**: scim/v2/Users/**Mock.User**?**lookupByName=true**'
      responses:
        '204':
          description: Returns a 204 with no response body if delete was successful.
components:
  securitySchemes:
    basicAuth:
      type: http
      scheme: basic
```
