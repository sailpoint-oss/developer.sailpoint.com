# UIPluginAssetBundle

# UIPluginAssetBundle

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AssetBundleId** | **string** | Unique identifier of the asset bundle | 
**PluginInstanceId** | **string** | Plugin instance this bundle belongs to | 
**Assets** | [**[]AssetFileEntry**](asset-file-entry) |  | 
**AssetBasePath** | **string** | S3 key prefix where the bundle's files are stored | 
**CleanupAfter** | Pointer to **NullableTime** | ISO 8601 timestamp after which S3 assets may be cleaned up; null/omitted if active | [optional] 
**Created** | **SailPointTime** | ISO 8601 creation timestamp | 

## Methods

### NewUIPluginAssetBundle

`func NewUIPluginAssetBundle(assetBundleId string, pluginInstanceId string, assets []AssetFileEntry, assetBasePath string, created SailPointTime, ) *UIPluginAssetBundle`

NewUIPluginAssetBundle instantiates a new UIPluginAssetBundle object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUIPluginAssetBundleWithDefaults

`func NewUIPluginAssetBundleWithDefaults() *UIPluginAssetBundle`

NewUIPluginAssetBundleWithDefaults instantiates a new UIPluginAssetBundle object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAssetBundleId

`func (o *UIPluginAssetBundle) GetAssetBundleId() string`

GetAssetBundleId returns the AssetBundleId field if non-nil, zero value otherwise.

### GetAssetBundleIdOk

`func (o *UIPluginAssetBundle) GetAssetBundleIdOk() (*string, bool)`

GetAssetBundleIdOk returns a tuple with the AssetBundleId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssetBundleId

`func (o *UIPluginAssetBundle) SetAssetBundleId(v string)`

SetAssetBundleId sets AssetBundleId field to given value.


### GetPluginInstanceId

`func (o *UIPluginAssetBundle) GetPluginInstanceId() string`

GetPluginInstanceId returns the PluginInstanceId field if non-nil, zero value otherwise.

### GetPluginInstanceIdOk

`func (o *UIPluginAssetBundle) GetPluginInstanceIdOk() (*string, bool)`

GetPluginInstanceIdOk returns a tuple with the PluginInstanceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPluginInstanceId

`func (o *UIPluginAssetBundle) SetPluginInstanceId(v string)`

SetPluginInstanceId sets PluginInstanceId field to given value.


### GetAssets

`func (o *UIPluginAssetBundle) GetAssets() []AssetFileEntry`

GetAssets returns the Assets field if non-nil, zero value otherwise.

### GetAssetsOk

`func (o *UIPluginAssetBundle) GetAssetsOk() (*[]AssetFileEntry, bool)`

GetAssetsOk returns a tuple with the Assets field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssets

`func (o *UIPluginAssetBundle) SetAssets(v []AssetFileEntry)`

SetAssets sets Assets field to given value.


### GetAssetBasePath

`func (o *UIPluginAssetBundle) GetAssetBasePath() string`

GetAssetBasePath returns the AssetBasePath field if non-nil, zero value otherwise.

### GetAssetBasePathOk

`func (o *UIPluginAssetBundle) GetAssetBasePathOk() (*string, bool)`

GetAssetBasePathOk returns a tuple with the AssetBasePath field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssetBasePath

`func (o *UIPluginAssetBundle) SetAssetBasePath(v string)`

SetAssetBasePath sets AssetBasePath field to given value.


### GetCleanupAfter

`func (o *UIPluginAssetBundle) GetCleanupAfter() SailPointTime`

GetCleanupAfter returns the CleanupAfter field if non-nil, zero value otherwise.

### GetCleanupAfterOk

`func (o *UIPluginAssetBundle) GetCleanupAfterOk() (*SailPointTime, bool)`

GetCleanupAfterOk returns a tuple with the CleanupAfter field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCleanupAfter

`func (o *UIPluginAssetBundle) SetCleanupAfter(v SailPointTime)`

SetCleanupAfter sets CleanupAfter field to given value.

### HasCleanupAfter

`func (o *UIPluginAssetBundle) HasCleanupAfter() bool`

HasCleanupAfter returns a boolean if a field has been set.

### SetCleanupAfterNil

`func (o *UIPluginAssetBundle) SetCleanupAfterNil(b bool)`

 SetCleanupAfterNil sets the value for CleanupAfter to be an explicit nil

### UnsetCleanupAfter
`func (o *UIPluginAssetBundle) UnsetCleanupAfter()`

UnsetCleanupAfter ensures that no value is present for CleanupAfter, not even an explicit nil
### GetCreated

`func (o *UIPluginAssetBundle) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *UIPluginAssetBundle) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *UIPluginAssetBundle) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.



