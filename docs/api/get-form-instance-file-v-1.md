## OpenAPI

```yaml GET /form-instances/v1/{formInstanceID}/file/{fileID}
openapi: 3.0.1
info:
  title: Identity Security Cloud API
  description: Use these APIs to interact with the Identity Security Cloud platform to achieve repeatable, automated processes with greater scalability. We encourage you to join the SailPoint Developer Community forum at https://developer.sailpoint.com/discuss to connect with other developers using our APIs.
  termsOfService: https://developer.sailpoint.com/discuss/tos
  contact:
    name: Developer Relations
    url: https://developer.sailpoint.com/discuss/api-help
  license:
    name: MIT
    url: https://opensource.org/licenses/MIT
  version: v1
servers:
  - url: https://{tenant}.api.identitynow.com
    description: This is the production API server.
    variables:
      tenant:
        default: sailpoint
        description: This is the name of your tenant, typically your company's name.
  - url: https://{apiUrl}
    description: This is the versioned API server.
    variables:
      apiUrl:
        default: sailpoint.api.identitynow.com
        description: This is the api url of your tenant
paths:
  /form-instances/v1/{formInstanceID}/file/{fileID}:
    get:
      description: Download instance file by fileid.
      operationId: getFormInstanceFileV1
      security:
        - userAuth:
            - sp:forms:manage
      parameters:
        - name: formInstanceID
          in: path
          description: |-
            FormInstanceID

            Form instance ID
          required: true
          x-sailpoint-resource-operation-id: searchFormDefinitionsByTenantV1
          example: 00000000-0000-0000-0000-000000000000
          schema:
            type: string
            x-go-name: FormInstanceID
          x-go-name: FormInstanceID
        - name: fileID
          in: path
          description: |-
            FileID

            String specifying the hashed name of the uploaded file we are retrieving.
          required: true
          x-sailpoint-resource-operation-id: createFormDefinitionFileRequestV1
          example: 00000031N0J7R2B57M8YG73J7M.png
          schema:
            type: string
            x-go-name: FileID
          x-go-name: FileID
      responses:
        '200':
          description: Returns a file that is referred to by fileID and associated with the formInstanceID
          content:
            application/json:
              schema:
                type: string
                format: binary
            image/jpeg:
              schema:
                type: string
                format: binary
            image/png:
              schema:
                type: string
                format: binary
            application/octet-stream:
              schema:
                type: string
                format: binary
        '400':
          description: An error with the request occurred
          content:
            application/json:
              schema:
                type: object
                properties:
                  detailCode:
                    type: string
                    x-go-name: DetailCode
                  messages:
                    type: array
                    items:
                      title: ErrorMessage is the standard API error response message type.
                      type: object
                      properties:
                        locale:
                          description: Locale is the current Locale
                          example: en-US
                          type: string
                          x-go-name: Locale
                        localeOrigin:
                          description: LocaleOrigin holds possible values of how the locale was selected
                          example: DEFAULT
                          type: string
                          x-go-name: LocaleOrigin
                        text:
                          description: Text is the actual text of the error message
                          example: This is an error
                          type: string
                          x-go-name: Text
                      x-go-package: github.com/sailpoint/atlas-go/atlas/web
                    x-go-name: Messages
                  statusCode:
                    type: integer
                    format: int64
                    x-go-name: StatusCode
                  trackingId:
                    type: string
                    x-go-name: TrackingID
            image/jpeg:
              schema:
                type: object
                properties:
                  detailCode:
                    type: string
                    x-go-name: DetailCode
                  messages:
                    type: array
                    items:
                      title: ErrorMessage is the standard API error response message type.
                      type: object
                      properties:
                        locale:
                          description: Locale is the current Locale
                          example: en-US
                          type: string
                          x-go-name: Locale
                        localeOrigin:
                          description: LocaleOrigin holds possible values of how the locale was selected
                          example: DEFAULT
                          type: string
                          x-go-name: LocaleOrigin
                        text:
                          description: Text is the actual text of the error message
                          example: This is an error
                          type: string
                          x-go-name: Text
                      x-go-package: github.com/sailpoint/atlas-go/atlas/web
                    x-go-name: Messages
                  statusCode:
                    type: integer
                    format: int64
                    x-go-name: StatusCode
                  trackingId:
                    type: string
                    x-go-name: TrackingID
            image/png:
              schema:
                type: object
                properties:
                  detailCode:
                    type: string
                    x-go-name: DetailCode
                  messages:
                    type: array
                    items:
                      title: ErrorMessage is the standard API error response message type.
                      type: object
                      properties:
                        locale:
                          description: Locale is the current Locale
                          example: en-US
                          type: string
                          x-go-name: Locale
                        localeOrigin:
                          description: LocaleOrigin holds possible values of how the locale was selected
                          example: DEFAULT
                          type: string
                          x-go-name: LocaleOrigin
                        text:
                          description: Text is the actual text of the error message
                          example: This is an error
                          type: string
                          x-go-name: Text
                      x-go-package: github.com/sailpoint/atlas-go/atlas/web
                    x-go-name: Messages
                  statusCode:
                    type: integer
                    format: int64
                    x-go-name: StatusCode
                  trackingId:
                    type: string
                    x-go-name: TrackingID
            application/octet-stream:
              schema:
                type: object
                properties:
                  detailCode:
                    type: string
                    x-go-name: DetailCode
                  messages:
                    type: array
                    items:
                      title: ErrorMessage is the standard API error response message type.
                      type: object
                      properties:
                        locale:
                          description: Locale is the current Locale
                          example: en-US
                          type: string
                          x-go-name: Locale
                        localeOrigin:
                          description: LocaleOrigin holds possible values of how the locale was selected
                          example: DEFAULT
                          type: string
                          x-go-name: LocaleOrigin
                        text:
                          description: Text is the actual text of the error message
                          example: This is an error
                          type: string
                          x-go-name: Text
                      x-go-package: github.com/sailpoint/atlas-go/atlas/web
                    x-go-name: Messages
                  statusCode:
                    type: integer
                    format: int64
                    x-go-name: StatusCode
                  trackingId:
                    type: string
                    x-go-name: TrackingID
        '401':
          description: An error with the authorization occurred
          content:
            application/json:
              schema:
                type: object
                properties:
                  detailCode:
                    type: string
                    x-go-name: DetailCode
                  messages:
                    type: array
                    items:
                      title: ErrorMessage is the standard API error response message type.
                      type: object
                      properties:
                        locale:
                          description: Locale is the current Locale
                          example: en-US
                          type: string
                          x-go-name: Locale
                        localeOrigin:
                          description: LocaleOrigin holds possible values of how the locale was selected
                          example: DEFAULT
                          type: string
                          x-go-name: LocaleOrigin
                        text:
                          description: Text is the actual text of the error message
                          example: This is an error
                          type: string
                          x-go-name: Text
                      x-go-package: github.com/sailpoint/atlas-go/atlas/web
                    x-go-name: Messages
                  statusCode:
                    type: integer
                    format: int64
                    x-go-name: StatusCode
                  trackingId:
                    type: string
                    x-go-name: TrackingID
            image/jpeg:
              schema:
                type: object
                properties:
                  detailCode:
                    type: string
                    x-go-name: DetailCode
                  messages:
                    type: array
                    items:
                      title: ErrorMessage is the standard API error response message type.
                      type: object
                      properties:
                        locale:
                          description: Locale is the current Locale
                          example: en-US
                          type: string
                          x-go-name: Locale
                        localeOrigin:
                          description: LocaleOrigin holds possible values of how the locale was selected
                          example: DEFAULT
                          type: string
                          x-go-name: LocaleOrigin
                        text:
                          description: Text is the actual text of the error message
                          example: This is an error
                          type: string
                          x-go-name: Text
                      x-go-package: github.com/sailpoint/atlas-go/atlas/web
                    x-go-name: Messages
                  statusCode:
                    type: integer
                    format: int64
                    x-go-name: StatusCode
                  trackingId:
                    type: string
                    x-go-name: TrackingID
            image/png:
              schema:
                type: object
                properties:
                  detailCode:
                    type: string
                    x-go-name: DetailCode
                  messages:
                    type: array
                    items:
                      title: ErrorMessage is the standard API error response message type.
                      type: object
                      properties:
                        locale:
                          description: Locale is the current Locale
                          example: en-US
                          type: string
                          x-go-name: Locale
                        localeOrigin:
                          description: LocaleOrigin holds possible values of how the locale was selected
                          example: DEFAULT
                          type: string
                          x-go-name: LocaleOrigin
                        text:
                          description: Text is the actual text of the error message
                          example: This is an error
                          type: string
                          x-go-name: Text
                      x-go-package: github.com/sailpoint/atlas-go/atlas/web
                    x-go-name: Messages
                  statusCode:
                    type: integer
                    format: int64
                    x-go-name: StatusCode
                  trackingId:
                    type: string
                    x-go-name: TrackingID
            application/octet-stream:
              schema:
                type: object
                properties:
                  detailCode:
                    type: string
                    x-go-name: DetailCode
                  messages:
                    type: array
                    items:
                      title: ErrorMessage is the standard API error response message type.
                      type: object
                      properties:
                        locale:
                          description: Locale is the current Locale
                          example: en-US
                          type: string
                          x-go-name: Locale
                        localeOrigin:
                          description: LocaleOrigin holds possible values of how the locale was selected
                          example: DEFAULT
                          type: string
                          x-go-name: LocaleOrigin
                        text:
                          description: Text is the actual text of the error message
                          example: This is an error
                          type: string
                          x-go-name: Text
                      x-go-package: github.com/sailpoint/atlas-go/atlas/web
                    x-go-name: Messages
                  statusCode:
                    type: integer
                    format: int64
                    x-go-name: StatusCode
                  trackingId:
                    type: string
                    x-go-name: TrackingID
        '403':
          description: An error with the user permissions occurred
          content:
            application/json:
              schema:
                type: object
                properties:
                  detailCode:
                    type: string
                    x-go-name: DetailCode
                  messages:
                    type: array
                    items:
                      title: ErrorMessage is the standard API error response message type.
                      type: object
                      properties:
                        locale:
                          description: Locale is the current Locale
                          example: en-US
                          type: string
                          x-go-name: Locale
                        localeOrigin:
                          description: LocaleOrigin holds possible values of how the locale was selected
                          example: DEFAULT
                          type: string
                          x-go-name: LocaleOrigin
                        text:
                          description: Text is the actual text of the error message
                          example: This is an error
                          type: string
                          x-go-name: Text
                      x-go-package: github.com/sailpoint/atlas-go/atlas/web
                    x-go-name: Messages
                  statusCode:
                    type: integer
                    format: int64
                    x-go-name: StatusCode
                  trackingId:
                    type: string
                    x-go-name: TrackingID
            image/jpeg:
              schema:
                type: object
                properties:
                  detailCode:
                    type: string
                    x-go-name: DetailCode
                  messages:
                    type: array
                    items:
                      title: ErrorMessage is the standard API error response message type.
                      type: object
                      properties:
                        locale:
                          description: Locale is the current Locale
                          example: en-US
                          type: string
                          x-go-name: Locale
                        localeOrigin:
                          description: LocaleOrigin holds possible values of how the locale was selected
                          example: DEFAULT
                          type: string
                          x-go-name: LocaleOrigin
                        text:
                          description: Text is the actual text of the error message
                          example: This is an error
                          type: string
                          x-go-name: Text
                      x-go-package: github.com/sailpoint/atlas-go/atlas/web
                    x-go-name: Messages
                  statusCode:
                    type: integer
                    format: int64
                    x-go-name: StatusCode
                  trackingId:
                    type: string
                    x-go-name: TrackingID
            image/png:
              schema:
                type: object
                properties:
                  detailCode:
                    type: string
                    x-go-name: DetailCode
                  messages:
                    type: array
                    items:
                      title: ErrorMessage is the standard API error response message type.
                      type: object
                      properties:
                        locale:
                          description: Locale is the current Locale
                          example: en-US
                          type: string
                          x-go-name: Locale
                        localeOrigin:
                          description: LocaleOrigin holds possible values of how the locale was selected
                          example: DEFAULT
                          type: string
                          x-go-name: LocaleOrigin
                        text:
                          description: Text is the actual text of the error message
                          example: This is an error
                          type: string
                          x-go-name: Text
                      x-go-package: github.com/sailpoint/atlas-go/atlas/web
                    x-go-name: Messages
                  statusCode:
                    type: integer
                    format: int64
                    x-go-name: StatusCode
                  trackingId:
                    type: string
                    x-go-name: TrackingID
            application/octet-stream:
              schema:
                type: object
                properties:
                  detailCode:
                    type: string
                    x-go-name: DetailCode
                  messages:
                    type: array
                    items:
                      title: ErrorMessage is the standard API error response message type.
                      type: object
                      properties:
                        locale:
                          description: Locale is the current Locale
                          example: en-US
                          type: string
                          x-go-name: Locale
                        localeOrigin:
                          description: LocaleOrigin holds possible values of how the locale was selected
                          example: DEFAULT
                          type: string
                          x-go-name: LocaleOrigin
                        text:
                          description: Text is the actual text of the error message
                          example: This is an error
                          type: string
                          x-go-name: Text
                      x-go-package: github.com/sailpoint/atlas-go/atlas/web
                    x-go-name: Messages
                  statusCode:
                    type: integer
                    format: int64
                    x-go-name: StatusCode
                  trackingId:
                    type: string
                    x-go-name: TrackingID
        '404':
          description: An error with the item not found
          content:
            application/json:
              schema:
                type: object
                properties:
                  detailCode:
                    type: string
                    x-go-name: DetailCode
                  messages:
                    type: array
                    items:
                      title: ErrorMessage is the standard API error response message type.
                      type: object
                      properties:
                        locale:
                          description: Locale is the current Locale
                          example: en-US
                          type: string
                          x-go-name: Locale
                        localeOrigin:
                          description: LocaleOrigin holds possible values of how the locale was selected
                          example: DEFAULT
                          type: string
                          x-go-name: LocaleOrigin
                        text:
                          description: Text is the actual text of the error message
                          example: This is an error
                          type: string
                          x-go-name: Text
                      x-go-package: github.com/sailpoint/atlas-go/atlas/web
                    x-go-name: Messages
                  statusCode:
                    type: integer
                    format: int64
                    x-go-name: StatusCode
                  trackingId:
                    type: string
                    x-go-name: TrackingID
            image/jpeg:
              schema:
                type: object
                properties:
                  detailCode:
                    type: string
                    x-go-name: DetailCode
                  messages:
                    type: array
                    items:
                      title: ErrorMessage is the standard API error response message type.
                      type: object
                      properties:
                        locale:
                          description: Locale is the current Locale
                          example: en-US
                          type: string
                          x-go-name: Locale
                        localeOrigin:
                          description: LocaleOrigin holds possible values of how the locale was selected
                          example: DEFAULT
                          type: string
                          x-go-name: LocaleOrigin
                        text:
                          description: Text is the actual text of the error message
                          example: This is an error
                          type: string
                          x-go-name: Text
                      x-go-package: github.com/sailpoint/atlas-go/atlas/web
                    x-go-name: Messages
                  statusCode:
                    type: integer
                    format: int64
                    x-go-name: StatusCode
                  trackingId:
                    type: string
                    x-go-name: TrackingID
            image/png:
              schema:
                type: object
                properties:
                  detailCode:
                    type: string
                    x-go-name: DetailCode
                  messages:
                    type: array
                    items:
                      title: ErrorMessage is the standard API error response message type.
                      type: object
                      properties:
                        locale:
                          description: Locale is the current Locale
                          example: en-US
                          type: string
                          x-go-name: Locale
                        localeOrigin:
                          description: LocaleOrigin holds possible values of how the locale was selected
                          example: DEFAULT
                          type: string
                          x-go-name: LocaleOrigin
                        text:
                          description: Text is the actual text of the error message
                          example: This is an error
                          type: string
                          x-go-name: Text
                      x-go-package: github.com/sailpoint/atlas-go/atlas/web
                    x-go-name: Messages
                  statusCode:
                    type: integer
                    format: int64
                    x-go-name: StatusCode
                  trackingId:
                    type: string
                    x-go-name: TrackingID
            application/octet-stream:
              schema:
                type: object
                properties:
                  detailCode:
                    type: string
                    x-go-name: DetailCode
                  messages:
                    type: array
                    items:
                      title: ErrorMessage is the standard API error response message type.
                      type: object
                      properties:
                        locale:
                          description: Locale is the current Locale
                          example: en-US
                          type: string
                          x-go-name: Locale
                        localeOrigin:
                          description: LocaleOrigin holds possible values of how the locale was selected
                          example: DEFAULT
                          type: string
                          x-go-name: LocaleOrigin
                        text:
                          description: Text is the actual text of the error message
                          example: This is an error
                          type: string
                          x-go-name: Text
                      x-go-package: github.com/sailpoint/atlas-go/atlas/web
                    x-go-name: Messages
                  statusCode:
                    type: integer
                    format: int64
                    x-go-name: StatusCode
                  trackingId:
                    type: string
                    x-go-name: TrackingID
        '429':
          description: Too many requests
          content:
            application/json:
              schema:
                title: Error is the standard API error response type.
                type: object
                properties:
                  detailCode:
                    description: DetailCode is the text of the status code returned
                    example: Internal Server Error
                    type: string
                    x-go-name: DetailCode
                  messages:
                    type: array
                    items:
                      title: ErrorMessage is the standard API error response message type.
                      type: object
                      properties:
                        locale:
                          description: Locale is the current Locale
                          example: en-US
                          type: string
                          x-go-name: Locale
                        localeOrigin:
                          description: LocaleOrigin holds possible values of how the locale was selected
                          example: DEFAULT
                          type: string
                          x-go-name: LocaleOrigin
                        text:
                          description: Text is the actual text of the error message
                          example: This is an error
                          type: string
                          x-go-name: Text
                      x-go-package: github.com/sailpoint/atlas-go/atlas/web
                    x-go-name: Messages
                  trackingId:
                    description: TrackingID is the request tracking unique identifier
                    example: 9cd03ef80e6a425eb6b11bdbb057cdb4
                    type: string
                    x-go-name: TrackingID
                x-go-package: github.com/sailpoint/atlas-go/atlas/web
        '500':
          description: An internal server error occurred
          content:
            application/json:
              schema:
                type: object
                properties:
                  detailCode:
                    type: string
                    x-go-name: DetailCode
                  messages:
                    type: array
                    items:
                      title: ErrorMessage is the standard API error response message type.
                      type: object
                      properties:
                        locale:
                          description: Locale is the current Locale
                          example: en-US
                          type: string
                          x-go-name: Locale
                        localeOrigin:
                          description: LocaleOrigin holds possible values of how the locale was selected
                          example: DEFAULT
                          type: string
                          x-go-name: LocaleOrigin
                        text:
                          description: Text is the actual text of the error message
                          example: This is an error
                          type: string
                          x-go-name: Text
                      x-go-package: github.com/sailpoint/atlas-go/atlas/web
                    x-go-name: Messages
                  statusCode:
                    type: integer
                    format: int64
                    x-go-name: StatusCode
                  trackingId:
                    type: string
                    x-go-name: TrackingID
            image/jpeg:
              schema:
                type: object
                properties:
                  detailCode:
                    type: string
                    x-go-name: DetailCode
                  messages:
                    type: array
                    items:
                      title: ErrorMessage is the standard API error response message type.
                      type: object
                      properties:
                        locale:
                          description: Locale is the current Locale
                          example: en-US
                          type: string
                          x-go-name: Locale
                        localeOrigin:
                          description: LocaleOrigin holds possible values of how the locale was selected
                          example: DEFAULT
                          type: string
                          x-go-name: LocaleOrigin
                        text:
                          description: Text is the actual text of the error message
                          example: This is an error
                          type: string
                          x-go-name: Text
                      x-go-package: github.com/sailpoint/atlas-go/atlas/web
                    x-go-name: Messages
                  statusCode:
                    type: integer
                    format: int64
                    x-go-name: StatusCode
                  trackingId:
                    type: string
                    x-go-name: TrackingID
            image/png:
              schema:
                type: object
                properties:
                  detailCode:
                    type: string
                    x-go-name: DetailCode
                  messages:
                    type: array
                    items:
                      title: ErrorMessage is the standard API error response message type.
                      type: object
                      properties:
                        locale:
                          description: Locale is the current Locale
                          example: en-US
                          type: string
                          x-go-name: Locale
                        localeOrigin:
                          description: LocaleOrigin holds possible values of how the locale was selected
                          example: DEFAULT
                          type: string
                          x-go-name: LocaleOrigin
                        text:
                          description: Text is the actual text of the error message
                          example: This is an error
                          type: string
                          x-go-name: Text
                      x-go-package: github.com/sailpoint/atlas-go/atlas/web
                    x-go-name: Messages
                  statusCode:
                    type: integer
                    format: int64
                    x-go-name: StatusCode
                  trackingId:
                    type: string
                    x-go-name: TrackingID
            application/octet-stream:
              schema:
                type: object
                properties:
                  detailCode:
                    type: string
                    x-go-name: DetailCode
                  messages:
                    type: array
                    items:
                      title: ErrorMessage is the standard API error response message type.
                      type: object
                      properties:
                        locale:
                          description: Locale is the current Locale
                          example: en-US
                          type: string
                          x-go-name: Locale
                        localeOrigin:
                          description: LocaleOrigin holds possible values of how the locale was selected
                          example: DEFAULT
                          type: string
                          x-go-name: LocaleOrigin
                        text:
                          description: Text is the actual text of the error message
                          example: This is an error
                          type: string
                          x-go-name: Text
                      x-go-package: github.com/sailpoint/atlas-go/atlas/web
                    x-go-name: Messages
                  statusCode:
                    type: integer
                    format: int64
                    x-go-name: StatusCode
                  trackingId:
                    type: string
                    x-go-name: TrackingID
        '503':
          description: An external service is not available
          content:
            application/json:
              schema:
                type: object
                properties:
                  detailCode:
                    type: string
                    x-go-name: DetailCode
                  messages:
                    type: array
                    items:
                      title: ErrorMessage is the standard API error response message type.
                      type: object
                      properties:
                        locale:
                          description: Locale is the current Locale
                          example: en-US
                          type: string
                          x-go-name: Locale
                        localeOrigin:
                          description: LocaleOrigin holds possible values of how the locale was selected
                          example: DEFAULT
                          type: string
                          x-go-name: LocaleOrigin
                        text:
                          description: Text is the actual text of the error message
                          example: This is an error
                          type: string
                          x-go-name: Text
                      x-go-package: github.com/sailpoint/atlas-go/atlas/web
                    x-go-name: Messages
                  statusCode:
                    type: integer
                    format: int64
                    x-go-name: StatusCode
                  trackingId:
                    type: string
                    x-go-name: TrackingID
            image/jpeg:
              schema:
                type: object
                properties:
                  detailCode:
                    type: string
                    x-go-name: DetailCode
                  messages:
                    type: array
                    items:
                      title: ErrorMessage is the standard API error response message type.
                      type: object
                      properties:
                        locale:
                          description: Locale is the current Locale
                          example: en-US
                          type: string
                          x-go-name: Locale
                        localeOrigin:
                          description: LocaleOrigin holds possible values of how the locale was selected
                          example: DEFAULT
                          type: string
                          x-go-name: LocaleOrigin
                        text:
                          description: Text is the actual text of the error message
                          example: This is an error
                          type: string
                          x-go-name: Text
                      x-go-package: github.com/sailpoint/atlas-go/atlas/web
                    x-go-name: Messages
                  statusCode:
                    type: integer
                    format: int64
                    x-go-name: StatusCode
                  trackingId:
                    type: string
                    x-go-name: TrackingID
            image/png:
              schema:
                type: object
                properties:
                  detailCode:
                    type: string
                    x-go-name: DetailCode
                  messages:
                    type: array
                    items:
                      title: ErrorMessage is the standard API error response message type.
                      type: object
                      properties:
                        locale:
                          description: Locale is the current Locale
                          example: en-US
                          type: string
                          x-go-name: Locale
                        localeOrigin:
                          description: LocaleOrigin holds possible values of how the locale was selected
                          example: DEFAULT
                          type: string
                          x-go-name: LocaleOrigin
                        text:
                          description: Text is the actual text of the error message
                          example: This is an error
                          type: string
                          x-go-name: Text
                      x-go-package: github.com/sailpoint/atlas-go/atlas/web
                    x-go-name: Messages
                  statusCode:
                    type: integer
                    format: int64
                    x-go-name: StatusCode
                  trackingId:
                    type: string
                    x-go-name: TrackingID
            application/octet-stream:
              schema:
                type: object
                properties:
                  detailCode:
                    type: string
                    x-go-name: DetailCode
                  messages:
                    type: array
                    items:
                      title: ErrorMessage is the standard API error response message type.
                      type: object
                      properties:
                        locale:
                          description: Locale is the current Locale
                          example: en-US
                          type: string
                          x-go-name: Locale
                        localeOrigin:
                          description: LocaleOrigin holds possible values of how the locale was selected
                          example: DEFAULT
                          type: string
                          x-go-name: LocaleOrigin
                        text:
                          description: Text is the actual text of the error message
                          example: This is an error
                          type: string
                          x-go-name: Text
                      x-go-package: github.com/sailpoint/atlas-go/atlas/web
                    x-go-name: Messages
                  statusCode:
                    type: integer
                    format: int64
                    x-go-name: StatusCode
                  trackingId:
                    type: string
                    x-go-name: TrackingID
components:
  securitySchemes:
    userAuth:
      type: oauth2
      x-displayName: Personal Access Token
      description: |
        OAuth2 Bearer token (JWT) generated using either a [personal access token (PAT)](https://developer.sailpoint.com/docs/api/authentication/#generate-a-personal-access-token) or through the [authorization code flow](https://developer.sailpoint.com/docs/api/authentication/#request-access-token-with-authorization-code-grant-flow).

        Personal access tokens are associated with a user in Identity Security Cloud and relies on the user's [user level](https://documentation.sailpoint.com/saas/help/common/users/index.html) (ex. Admin, Helpdesk, etc.) to determine a base level of access.

        See [Identity Security Cloud REST API Authentication](https://developer.sailpoint.com/docs/api/authentication/) for more information.
      flows:
        clientCredentials:
          tokenUrl: https://example-tenant.api.identitynow.com/oauth/token
          scopes:
            sp:scopes:default: default scope
            sp:scopes:all: access to all scopes
        authorizationCode:
          authorizationUrl: https://example-tenant.login.sailpoint.com/oauth/authorize
          tokenUrl: https://example-tenant.api.identitynow.com/oauth/token
          scopes:
            sp:scopes:default: default scope
            sp:scopes:all: access to all scopes
    applicationAuth:
      type: oauth2
      x-displayName: Client Credentials
      description: |
        OAuth2 Bearer token (JWT) generated using [client credentials flow](https://developer.sailpoint.com/docs/api/authentication/#request-access-token-with-client-credentials-grant-flow).

        Client credentials refers to tokens that are not associated with a user in Identity Security Cloud.

        See [Identity Security Cloud REST API Authentication](https://developer.sailpoint.com/docs/api/authentication/) for more information.
      flows:
        clientCredentials:
          tokenUrl: https://example-tenant.api.identitynow.com/oauth/token
          scopes:
            sp:scopes:default: default scope
            sp:scopes:all: access to all scopes
```
