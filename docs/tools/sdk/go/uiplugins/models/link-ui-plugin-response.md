# LinkUIPluginResponse

# LinkUIPluginResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DevOverrides** | **map[string]string** | Updated `devOverrides` map of `identityId` to `https://localhost:{port}`. | 
**DevDocumentHeaders** | [**PluginDocumentHeaders**](plugin-document-headers) |  | 

## Methods

### NewLinkUIPluginResponse

`func NewLinkUIPluginResponse(devOverrides map[string]string, devDocumentHeaders PluginDocumentHeaders, ) *LinkUIPluginResponse`

NewLinkUIPluginResponse instantiates a new LinkUIPluginResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewLinkUIPluginResponseWithDefaults

`func NewLinkUIPluginResponseWithDefaults() *LinkUIPluginResponse`

NewLinkUIPluginResponseWithDefaults instantiates a new LinkUIPluginResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDevOverrides

`func (o *LinkUIPluginResponse) GetDevOverrides() map[string]string`

GetDevOverrides returns the DevOverrides field if non-nil, zero value otherwise.

### GetDevOverridesOk

`func (o *LinkUIPluginResponse) GetDevOverridesOk() (*map[string]string, bool)`

GetDevOverridesOk returns a tuple with the DevOverrides field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDevOverrides

`func (o *LinkUIPluginResponse) SetDevOverrides(v map[string]string)`

SetDevOverrides sets DevOverrides field to given value.


### GetDevDocumentHeaders

`func (o *LinkUIPluginResponse) GetDevDocumentHeaders() PluginDocumentHeaders`

GetDevDocumentHeaders returns the DevDocumentHeaders field if non-nil, zero value otherwise.

### GetDevDocumentHeadersOk

`func (o *LinkUIPluginResponse) GetDevDocumentHeadersOk() (*PluginDocumentHeaders, bool)`

GetDevDocumentHeadersOk returns a tuple with the DevDocumentHeaders field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDevDocumentHeaders

`func (o *LinkUIPluginResponse) SetDevDocumentHeaders(v PluginDocumentHeaders)`

SetDevDocumentHeaders sets DevDocumentHeaders field to given value.



