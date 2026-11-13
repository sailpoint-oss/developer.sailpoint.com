# DeviceOS

# DeviceOS

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | The operating system type. | [optional] 
**Version** | Pointer to **string** | The operating system version. | [optional] 

## Methods

### NewDeviceOS

`func NewDeviceOS() *DeviceOS`

NewDeviceOS instantiates a new DeviceOS object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDeviceOSWithDefaults

`func NewDeviceOSWithDefaults() *DeviceOS`

NewDeviceOSWithDefaults instantiates a new DeviceOS object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *DeviceOS) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *DeviceOS) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *DeviceOS) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *DeviceOS) HasType() bool`

HasType returns a boolean if a field has been set.

### GetVersion

`func (o *DeviceOS) GetVersion() string`

GetVersion returns the Version field if non-nil, zero value otherwise.

### GetVersionOk

`func (o *DeviceOS) GetVersionOk() (*string, bool)`

GetVersionOk returns a tuple with the Version field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVersion

`func (o *DeviceOS) SetVersion(v string)`

SetVersion sets Version field to given value.

### HasVersion

`func (o *DeviceOS) HasVersion() bool`

HasVersion returns a boolean if a field has been set.


