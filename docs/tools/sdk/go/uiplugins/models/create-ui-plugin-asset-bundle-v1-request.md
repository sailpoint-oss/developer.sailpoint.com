# CreateUiPluginAssetBundleV1Request

# CreateUiPluginAssetBundleV1Request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**File** | **[]*os.File** | Repeatable form field. Send one part per file; use the part filename for the bundle-relative path (e.g. `assets/app.js`). | 

## Methods

### NewCreateUiPluginAssetBundleV1Request

`func NewCreateUiPluginAssetBundleV1Request(file []*os.File, ) *CreateUiPluginAssetBundleV1Request`

NewCreateUiPluginAssetBundleV1Request instantiates a new CreateUiPluginAssetBundleV1Request object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateUiPluginAssetBundleV1RequestWithDefaults

`func NewCreateUiPluginAssetBundleV1RequestWithDefaults() *CreateUiPluginAssetBundleV1Request`

NewCreateUiPluginAssetBundleV1RequestWithDefaults instantiates a new CreateUiPluginAssetBundleV1Request object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFile

`func (o *CreateUiPluginAssetBundleV1Request) GetFile() []*os.File`

GetFile returns the File field if non-nil, zero value otherwise.

### GetFileOk

`func (o *CreateUiPluginAssetBundleV1Request) GetFileOk() (*[]*os.File, bool)`

GetFileOk returns a tuple with the File field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFile

`func (o *CreateUiPluginAssetBundleV1Request) SetFile(v []*os.File)`

SetFile sets File field to given value.



