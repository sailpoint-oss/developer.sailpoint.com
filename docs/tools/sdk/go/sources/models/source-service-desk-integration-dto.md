# SourceServiceDeskIntegrationDto

# SourceServiceDeskIntegrationDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | ID of the Service Desk Integration. | 
**Name** | **string** | Name of the Service Desk Integration, as given by the administrator who created it. Use this to find the integration in the Service Desk Integrations list. | 
**Type** | **string** | Type of the Service Desk Integration, matching the connector it was created from. This is the same value the Service Desk Integration APIs report as `type`, for example: - ServiceNowSDIM - ServiceNow  The supported types are not fixed, so use [List service desk integration types](https://developer.sailpoint.com/docs/api/get-service-desk-integration-types-v-1) for the current set rather than hard coding them. | 

## Methods

### NewSourceServiceDeskIntegrationDto

`func NewSourceServiceDeskIntegrationDto(id string, name string, type_ string, ) *SourceServiceDeskIntegrationDto`

NewSourceServiceDeskIntegrationDto instantiates a new SourceServiceDeskIntegrationDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSourceServiceDeskIntegrationDtoWithDefaults

`func NewSourceServiceDeskIntegrationDtoWithDefaults() *SourceServiceDeskIntegrationDto`

NewSourceServiceDeskIntegrationDtoWithDefaults instantiates a new SourceServiceDeskIntegrationDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *SourceServiceDeskIntegrationDto) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *SourceServiceDeskIntegrationDto) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *SourceServiceDeskIntegrationDto) SetId(v string)`

SetId sets Id field to given value.


### GetName

`func (o *SourceServiceDeskIntegrationDto) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *SourceServiceDeskIntegrationDto) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *SourceServiceDeskIntegrationDto) SetName(v string)`

SetName sets Name field to given value.


### GetType

`func (o *SourceServiceDeskIntegrationDto) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *SourceServiceDeskIntegrationDto) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *SourceServiceDeskIntegrationDto) SetType(v string)`

SetType sets Type field to given value.



