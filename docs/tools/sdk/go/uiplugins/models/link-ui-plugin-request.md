# LinkUIPluginRequest

# LinkUIPluginRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Port** | **int32** | Local dev server port. UMS constructs `https://localhost:{port}` server-side. Clients do not send a URL. | 

## Methods

### NewLinkUIPluginRequest

`func NewLinkUIPluginRequest(port int32, ) *LinkUIPluginRequest`

NewLinkUIPluginRequest instantiates a new LinkUIPluginRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewLinkUIPluginRequestWithDefaults

`func NewLinkUIPluginRequestWithDefaults() *LinkUIPluginRequest`

NewLinkUIPluginRequestWithDefaults instantiates a new LinkUIPluginRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPort

`func (o *LinkUIPluginRequest) GetPort() int32`

GetPort returns the Port field if non-nil, zero value otherwise.

### GetPortOk

`func (o *LinkUIPluginRequest) GetPortOk() (*int32, bool)`

GetPortOk returns a tuple with the Port field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPort

`func (o *LinkUIPluginRequest) SetPort(v int32)`

SetPort sets Port field to given value.



