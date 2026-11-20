# AssetFileEntry

# AssetFileEntry

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Path** | **string** | Relative path within the asset bundle directory | 
**SizeBytes** | **int64** | Uncompressed file size in bytes | 
**Sha256** | **string** | SHA-256 hex digest of file contents | 

## Methods

### NewAssetFileEntry

`func NewAssetFileEntry(path string, sizeBytes int64, sha256 string, ) *AssetFileEntry`

NewAssetFileEntry instantiates a new AssetFileEntry object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAssetFileEntryWithDefaults

`func NewAssetFileEntryWithDefaults() *AssetFileEntry`

NewAssetFileEntryWithDefaults instantiates a new AssetFileEntry object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPath

`func (o *AssetFileEntry) GetPath() string`

GetPath returns the Path field if non-nil, zero value otherwise.

### GetPathOk

`func (o *AssetFileEntry) GetPathOk() (*string, bool)`

GetPathOk returns a tuple with the Path field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPath

`func (o *AssetFileEntry) SetPath(v string)`

SetPath sets Path field to given value.


### GetSizeBytes

`func (o *AssetFileEntry) GetSizeBytes() int64`

GetSizeBytes returns the SizeBytes field if non-nil, zero value otherwise.

### GetSizeBytesOk

`func (o *AssetFileEntry) GetSizeBytesOk() (*int64, bool)`

GetSizeBytesOk returns a tuple with the SizeBytes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSizeBytes

`func (o *AssetFileEntry) SetSizeBytes(v int64)`

SetSizeBytes sets SizeBytes field to given value.


### GetSha256

`func (o *AssetFileEntry) GetSha256() string`

GetSha256 returns the Sha256 field if non-nil, zero value otherwise.

### GetSha256Ok

`func (o *AssetFileEntry) GetSha256Ok() (*string, bool)`

GetSha256Ok returns a tuple with the Sha256 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSha256

`func (o *AssetFileEntry) SetSha256(v string)`

SetSha256 sets Sha256 field to given value.



