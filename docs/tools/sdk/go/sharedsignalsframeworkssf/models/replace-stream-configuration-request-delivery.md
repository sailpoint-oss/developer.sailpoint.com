# ReplaceStreamConfigurationRequestDelivery

# ReplaceStreamConfigurationRequestDelivery

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Method** | **string** | Delivery method (only push is supported). | 
**EndpointUrl** | **string** | Receiver endpoint URL for push delivery. | 
**AuthorizationHeader** | Pointer to **string** | Authorization header value for delivery requests. | [optional] 

## Methods

### NewReplaceStreamConfigurationRequestDelivery

`func NewReplaceStreamConfigurationRequestDelivery(method string, endpointUrl string, ) *ReplaceStreamConfigurationRequestDelivery`

NewReplaceStreamConfigurationRequestDelivery instantiates a new ReplaceStreamConfigurationRequestDelivery object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReplaceStreamConfigurationRequestDeliveryWithDefaults

`func NewReplaceStreamConfigurationRequestDeliveryWithDefaults() *ReplaceStreamConfigurationRequestDelivery`

NewReplaceStreamConfigurationRequestDeliveryWithDefaults instantiates a new ReplaceStreamConfigurationRequestDelivery object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMethod

`func (o *ReplaceStreamConfigurationRequestDelivery) GetMethod() string`

GetMethod returns the Method field if non-nil, zero value otherwise.

### GetMethodOk

`func (o *ReplaceStreamConfigurationRequestDelivery) GetMethodOk() (*string, bool)`

GetMethodOk returns a tuple with the Method field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMethod

`func (o *ReplaceStreamConfigurationRequestDelivery) SetMethod(v string)`

SetMethod sets Method field to given value.


### GetEndpointUrl

`func (o *ReplaceStreamConfigurationRequestDelivery) GetEndpointUrl() string`

GetEndpointUrl returns the EndpointUrl field if non-nil, zero value otherwise.

### GetEndpointUrlOk

`func (o *ReplaceStreamConfigurationRequestDelivery) GetEndpointUrlOk() (*string, bool)`

GetEndpointUrlOk returns a tuple with the EndpointUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndpointUrl

`func (o *ReplaceStreamConfigurationRequestDelivery) SetEndpointUrl(v string)`

SetEndpointUrl sets EndpointUrl field to given value.


### GetAuthorizationHeader

`func (o *ReplaceStreamConfigurationRequestDelivery) GetAuthorizationHeader() string`

GetAuthorizationHeader returns the AuthorizationHeader field if non-nil, zero value otherwise.

### GetAuthorizationHeaderOk

`func (o *ReplaceStreamConfigurationRequestDelivery) GetAuthorizationHeaderOk() (*string, bool)`

GetAuthorizationHeaderOk returns a tuple with the AuthorizationHeader field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthorizationHeader

`func (o *ReplaceStreamConfigurationRequestDelivery) SetAuthorizationHeader(v string)`

SetAuthorizationHeader sets AuthorizationHeader field to given value.

### HasAuthorizationHeader

`func (o *ReplaceStreamConfigurationRequestDelivery) HasAuthorizationHeader() bool`

HasAuthorizationHeader returns a boolean if a field has been set.


