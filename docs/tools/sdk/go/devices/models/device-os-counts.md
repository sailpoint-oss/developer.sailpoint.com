# DeviceOSCounts

# DeviceOSCounts

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Macos** | Pointer to **int64** | The number of macOS devices. | [optional] 
**Windows** | Pointer to **int64** | The number of Windows devices. | [optional] 
**Linux** | Pointer to **int64** | The number of Linux devices. | [optional] 
**Unknown** | Pointer to **int64** | The number of devices whose operating system is missing or is not macOS, Windows, or Linux. | [optional] 

## Methods

### NewDeviceOSCounts

`func NewDeviceOSCounts() *DeviceOSCounts`

NewDeviceOSCounts instantiates a new DeviceOSCounts object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDeviceOSCountsWithDefaults

`func NewDeviceOSCountsWithDefaults() *DeviceOSCounts`

NewDeviceOSCountsWithDefaults instantiates a new DeviceOSCounts object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMacos

`func (o *DeviceOSCounts) GetMacos() int64`

GetMacos returns the Macos field if non-nil, zero value otherwise.

### GetMacosOk

`func (o *DeviceOSCounts) GetMacosOk() (*int64, bool)`

GetMacosOk returns a tuple with the Macos field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMacos

`func (o *DeviceOSCounts) SetMacos(v int64)`

SetMacos sets Macos field to given value.

### HasMacos

`func (o *DeviceOSCounts) HasMacos() bool`

HasMacos returns a boolean if a field has been set.

### GetWindows

`func (o *DeviceOSCounts) GetWindows() int64`

GetWindows returns the Windows field if non-nil, zero value otherwise.

### GetWindowsOk

`func (o *DeviceOSCounts) GetWindowsOk() (*int64, bool)`

GetWindowsOk returns a tuple with the Windows field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWindows

`func (o *DeviceOSCounts) SetWindows(v int64)`

SetWindows sets Windows field to given value.

### HasWindows

`func (o *DeviceOSCounts) HasWindows() bool`

HasWindows returns a boolean if a field has been set.

### GetLinux

`func (o *DeviceOSCounts) GetLinux() int64`

GetLinux returns the Linux field if non-nil, zero value otherwise.

### GetLinuxOk

`func (o *DeviceOSCounts) GetLinuxOk() (*int64, bool)`

GetLinuxOk returns a tuple with the Linux field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinux

`func (o *DeviceOSCounts) SetLinux(v int64)`

SetLinux sets Linux field to given value.

### HasLinux

`func (o *DeviceOSCounts) HasLinux() bool`

HasLinux returns a boolean if a field has been set.

### GetUnknown

`func (o *DeviceOSCounts) GetUnknown() int64`

GetUnknown returns the Unknown field if non-nil, zero value otherwise.

### GetUnknownOk

`func (o *DeviceOSCounts) GetUnknownOk() (*int64, bool)`

GetUnknownOk returns a tuple with the Unknown field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUnknown

`func (o *DeviceOSCounts) SetUnknown(v int64)`

SetUnknown sets Unknown field to given value.

### HasUnknown

`func (o *DeviceOSCounts) HasUnknown() bool`

HasUnknown returns a boolean if a field has been set.


