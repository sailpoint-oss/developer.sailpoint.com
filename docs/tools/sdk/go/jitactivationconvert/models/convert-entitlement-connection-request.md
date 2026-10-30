# ConvertEntitlementConnectionRequest

# ConvertEntitlementConnectionRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ConnectionId** | **string** | The ID of the entitlement connection to convert. | 
**TargetType** | **string** | The assignment type to convert the entitlement connection to. | 

## Methods

### NewConvertEntitlementConnectionRequest

`func NewConvertEntitlementConnectionRequest(connectionId string, targetType string, ) *ConvertEntitlementConnectionRequest`

NewConvertEntitlementConnectionRequest instantiates a new ConvertEntitlementConnectionRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConvertEntitlementConnectionRequestWithDefaults

`func NewConvertEntitlementConnectionRequestWithDefaults() *ConvertEntitlementConnectionRequest`

NewConvertEntitlementConnectionRequestWithDefaults instantiates a new ConvertEntitlementConnectionRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetConnectionId

`func (o *ConvertEntitlementConnectionRequest) GetConnectionId() string`

GetConnectionId returns the ConnectionId field if non-nil, zero value otherwise.

### GetConnectionIdOk

`func (o *ConvertEntitlementConnectionRequest) GetConnectionIdOk() (*string, bool)`

GetConnectionIdOk returns a tuple with the ConnectionId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnectionId

`func (o *ConvertEntitlementConnectionRequest) SetConnectionId(v string)`

SetConnectionId sets ConnectionId field to given value.


### GetTargetType

`func (o *ConvertEntitlementConnectionRequest) GetTargetType() string`

GetTargetType returns the TargetType field if non-nil, zero value otherwise.

### GetTargetTypeOk

`func (o *ConvertEntitlementConnectionRequest) GetTargetTypeOk() (*string, bool)`

GetTargetTypeOk returns a tuple with the TargetType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetType

`func (o *ConvertEntitlementConnectionRequest) SetTargetType(v string)`

SetTargetType sets TargetType field to given value.



