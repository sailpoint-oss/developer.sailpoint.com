# PluginDocumentHeaders

# PluginDocumentHeaders

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ContentSecurityPolicy** | **string** | Effective `Content-Security-Policy` header value for plugin documents. | 
**PermissionsPolicy** | **string** | Effective `Permissions-Policy` header value for plugin documents. Features are denied by default unless the plugin opts in. | 

## Methods

### NewPluginDocumentHeaders

`func NewPluginDocumentHeaders(contentSecurityPolicy string, permissionsPolicy string, ) *PluginDocumentHeaders`

NewPluginDocumentHeaders instantiates a new PluginDocumentHeaders object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPluginDocumentHeadersWithDefaults

`func NewPluginDocumentHeadersWithDefaults() *PluginDocumentHeaders`

NewPluginDocumentHeadersWithDefaults instantiates a new PluginDocumentHeaders object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetContentSecurityPolicy

`func (o *PluginDocumentHeaders) GetContentSecurityPolicy() string`

GetContentSecurityPolicy returns the ContentSecurityPolicy field if non-nil, zero value otherwise.

### GetContentSecurityPolicyOk

`func (o *PluginDocumentHeaders) GetContentSecurityPolicyOk() (*string, bool)`

GetContentSecurityPolicyOk returns a tuple with the ContentSecurityPolicy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContentSecurityPolicy

`func (o *PluginDocumentHeaders) SetContentSecurityPolicy(v string)`

SetContentSecurityPolicy sets ContentSecurityPolicy field to given value.


### GetPermissionsPolicy

`func (o *PluginDocumentHeaders) GetPermissionsPolicy() string`

GetPermissionsPolicy returns the PermissionsPolicy field if non-nil, zero value otherwise.

### GetPermissionsPolicyOk

`func (o *PluginDocumentHeaders) GetPermissionsPolicyOk() (*string, bool)`

GetPermissionsPolicyOk returns a tuple with the PermissionsPolicy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPermissionsPolicy

`func (o *PluginDocumentHeaders) SetPermissionsPolicy(v string)`

SetPermissionsPolicy sets PermissionsPolicy field to given value.



