# DeliveryResponse

# DeliveryResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Method** | Pointer to **string** | Delivery method. | [optional] 
**EndpointUrl** | Pointer to **string** | Receiver endpoint URL. | [optional] 

## Methods

### NewDeliveryResponse

`func NewDeliveryResponse() *DeliveryResponse`

NewDeliveryResponse instantiates a new DeliveryResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDeliveryResponseWithDefaults

`func NewDeliveryResponseWithDefaults() *DeliveryResponse`

NewDeliveryResponseWithDefaults instantiates a new DeliveryResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMethod

`func (o *DeliveryResponse) GetMethod() string`

GetMethod returns the Method field if non-nil, zero value otherwise.

### GetMethodOk

`func (o *DeliveryResponse) GetMethodOk() (*string, bool)`

GetMethodOk returns a tuple with the Method field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMethod

`func (o *DeliveryResponse) SetMethod(v string)`

SetMethod sets Method field to given value.

### HasMethod

`func (o *DeliveryResponse) HasMethod() bool`

HasMethod returns a boolean if a field has been set.

### GetEndpointUrl

`func (o *DeliveryResponse) GetEndpointUrl() string`

GetEndpointUrl returns the EndpointUrl field if non-nil, zero value otherwise.

### GetEndpointUrlOk

`func (o *DeliveryResponse) GetEndpointUrlOk() (*string, bool)`

GetEndpointUrlOk returns a tuple with the EndpointUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndpointUrl

`func (o *DeliveryResponse) SetEndpointUrl(v string)`

SetEndpointUrl sets EndpointUrl field to given value.

### HasEndpointUrl

`func (o *DeliveryResponse) HasEndpointUrl() bool`

HasEndpointUrl returns a boolean if a field has been set.


