# PluginSlot

# PluginSlot

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SlotId** | **string** | Identifier referencing an entry in the slot registry | 
**RequiredCapabilities** | Pointer to **[]string** | ISC capabilities the user must hold (AND logic) to see this plugin in the slot. Empty means unrestricted. | [optional] [default to []]
**RestrictToUsers** | Pointer to **[]string** | User GUIDs (32-char hex) limiting visibility during development. Empty means no user restriction. | [optional] [default to []]

## Methods

### NewPluginSlot

`func NewPluginSlot(slotId string, ) *PluginSlot`

NewPluginSlot instantiates a new PluginSlot object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPluginSlotWithDefaults

`func NewPluginSlotWithDefaults() *PluginSlot`

NewPluginSlotWithDefaults instantiates a new PluginSlot object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSlotId

`func (o *PluginSlot) GetSlotId() string`

GetSlotId returns the SlotId field if non-nil, zero value otherwise.

### GetSlotIdOk

`func (o *PluginSlot) GetSlotIdOk() (*string, bool)`

GetSlotIdOk returns a tuple with the SlotId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSlotId

`func (o *PluginSlot) SetSlotId(v string)`

SetSlotId sets SlotId field to given value.


### GetRequiredCapabilities

`func (o *PluginSlot) GetRequiredCapabilities() []string`

GetRequiredCapabilities returns the RequiredCapabilities field if non-nil, zero value otherwise.

### GetRequiredCapabilitiesOk

`func (o *PluginSlot) GetRequiredCapabilitiesOk() (*[]string, bool)`

GetRequiredCapabilitiesOk returns a tuple with the RequiredCapabilities field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequiredCapabilities

`func (o *PluginSlot) SetRequiredCapabilities(v []string)`

SetRequiredCapabilities sets RequiredCapabilities field to given value.

### HasRequiredCapabilities

`func (o *PluginSlot) HasRequiredCapabilities() bool`

HasRequiredCapabilities returns a boolean if a field has been set.

### GetRestrictToUsers

`func (o *PluginSlot) GetRestrictToUsers() []string`

GetRestrictToUsers returns the RestrictToUsers field if non-nil, zero value otherwise.

### GetRestrictToUsersOk

`func (o *PluginSlot) GetRestrictToUsersOk() (*[]string, bool)`

GetRestrictToUsersOk returns a tuple with the RestrictToUsers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRestrictToUsers

`func (o *PluginSlot) SetRestrictToUsers(v []string)`

SetRestrictToUsers sets RestrictToUsers field to given value.

### HasRestrictToUsers

`func (o *PluginSlot) HasRestrictToUsers() bool`

HasRestrictToUsers returns a boolean if a field has been set.


