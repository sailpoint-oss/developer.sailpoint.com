# DeliveryRequest

# DeliveryRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Method** | Pointer to **string** | Delivery method (optional for PATCH). | [optional] 
**EndpointUrl** | Pointer to **string** | Receiver endpoint URL (optional for PATCH). | [optional] 
**AuthorizationHeader** | Pointer to **string** | Optional authorization header value. | [optional] 

## Methods

### NewDeliveryRequest

`func NewDeliveryRequest() *DeliveryRequest`

NewDeliveryRequest instantiates a new DeliveryRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDeliveryRequestWithDefaults

`func NewDeliveryRequestWithDefaults() *DeliveryRequest`

NewDeliveryRequestWithDefaults instantiates a new DeliveryRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMethod

`func (o *DeliveryRequest) GetMethod() string`

GetMethod returns the Method field if non-nil, zero value otherwise.

### GetMethodOk

`func (o *DeliveryRequest) GetMethodOk() (*string, bool)`

GetMethodOk returns a tuple with the Method field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMethod

`func (o *DeliveryRequest) SetMethod(v string)`

SetMethod sets Method field to given value.

### HasMethod

`func (o *DeliveryRequest) HasMethod() bool`

HasMethod returns a boolean if a field has been set.

### GetEndpointUrl

`func (o *DeliveryRequest) GetEndpointUrl() string`

GetEndpointUrl returns the EndpointUrl field if non-nil, zero value otherwise.

### GetEndpointUrlOk

`func (o *DeliveryRequest) GetEndpointUrlOk() (*string, bool)`

GetEndpointUrlOk returns a tuple with the EndpointUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndpointUrl

`func (o *DeliveryRequest) SetEndpointUrl(v string)`

SetEndpointUrl sets EndpointUrl field to given value.

### HasEndpointUrl

`func (o *DeliveryRequest) HasEndpointUrl() bool`

HasEndpointUrl returns a boolean if a field has been set.

### GetAuthorizationHeader

`func (o *DeliveryRequest) GetAuthorizationHeader() string`

GetAuthorizationHeader returns the AuthorizationHeader field if non-nil, zero value otherwise.

### GetAuthorizationHeaderOk

`func (o *DeliveryRequest) GetAuthorizationHeaderOk() (*string, bool)`

GetAuthorizationHeaderOk returns a tuple with the AuthorizationHeader field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthorizationHeader

`func (o *DeliveryRequest) SetAuthorizationHeader(v string)`

SetAuthorizationHeader sets AuthorizationHeader field to given value.

### HasAuthorizationHeader

`func (o *DeliveryRequest) HasAuthorizationHeader() bool`

HasAuthorizationHeader returns a boolean if a field has been set.


