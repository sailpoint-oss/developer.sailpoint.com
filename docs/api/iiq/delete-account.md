## OpenAPI

```yaml DELETE /Accounts/{accountId}
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
  /Accounts/{accountId}:
    delete:
      description: The endpoint used to delete an Account resource. **This is not reversible.**
      operationId: deleteAccount
      security:
        - basicAuth: []
      parameters:
        - name: accountId
          in: path
          schema:
            type: string
            example: c7c7777c7ef77e77777ee77e7a1f0444
          description: The id of the Account.
          required: true
      responses:
        '204':
          description: Returns a 204 with no response body if delete was successful.
components:
  securitySchemes:
    basicAuth:
      type: http
      scheme: basic
```
