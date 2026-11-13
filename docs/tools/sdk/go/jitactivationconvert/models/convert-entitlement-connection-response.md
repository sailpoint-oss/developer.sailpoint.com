# ConvertEntitlementConnectionResponse

# ConvertEntitlementConnectionResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ConnectionId** | **string** | The ID of the converted entitlement connection. | 
**Type** | **string** | The current assignment type of the entitlement connection, not the target type. | 
**State** | **string** | The current state of the entitlement connection. Conversion starts as PENDING. | 

## Methods

### NewConvertEntitlementConnectionResponse

`func NewConvertEntitlementConnectionResponse(connectionId string, type_ string, state string, ) *ConvertEntitlementConnectionResponse`

NewConvertEntitlementConnectionResponse instantiates a new ConvertEntitlementConnectionResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConvertEntitlementConnectionResponseWithDefaults

`func NewConvertEntitlementConnectionResponseWithDefaults() *ConvertEntitlementConnectionResponse`

NewConvertEntitlementConnectionResponseWithDefaults instantiates a new ConvertEntitlementConnectionResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetConnectionId

`func (o *ConvertEntitlementConnectionResponse) GetConnectionId() string`

GetConnectionId returns the ConnectionId field if non-nil, zero value otherwise.

### GetConnectionIdOk

`func (o *ConvertEntitlementConnectionResponse) GetConnectionIdOk() (*string, bool)`

GetConnectionIdOk returns a tuple with the ConnectionId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnectionId

`func (o *ConvertEntitlementConnectionResponse) SetConnectionId(v string)`

SetConnectionId sets ConnectionId field to given value.


### GetType

`func (o *ConvertEntitlementConnectionResponse) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ConvertEntitlementConnectionResponse) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ConvertEntitlementConnectionResponse) SetType(v string)`

SetType sets Type field to given value.


### GetState

`func (o *ConvertEntitlementConnectionResponse) GetState() string`

GetState returns the State field if non-nil, zero value otherwise.

### GetStateOk

`func (o *ConvertEntitlementConnectionResponse) GetStateOk() (*string, bool)`

GetStateOk returns a tuple with the State field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetState

`func (o *ConvertEntitlementConnectionResponse) SetState(v string)`

SetState sets State field to given value.



