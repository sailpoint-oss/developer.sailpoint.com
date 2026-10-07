# TenantUiMetadataItemUpdateRequest

# TenantUiMetadataItemUpdateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IframeWhiteList** | Pointer to **NullableString** | Parameter that organizational administrators can adjust to permit another domain to encapsulate IDN within an iframe. If you would like to reset the value use \"null\". It will only allow include into iframe non authenticated portions of the product, such as password reset. | [optional] 
**UsernameLabel** | Pointer to **NullableString** | Descriptor for the username input field. If you would like to reset the value use \"null\". | [optional] 
**UsernameEmptyText** | Pointer to **NullableString** | Placeholder text displayed in the username input field. If you would like to reset the value use \"null\". | [optional] 
**InstanceBadgeDisplayName** | Pointer to **NullableString** | Display name for the instance badge. Optional. Omit this property to leave the stored value unchanged. Use null to clear it. | [optional] 
**InstanceBadgeColor** | Pointer to **NullableString** | Hex value of color for the instance badge. Optional. Omit this property to leave the stored value unchanged. Use null to clear it. | [optional] 
**InstanceBadgeVisible** | Pointer to **NullableBool** | Visibility toggle for the instance badge. Optional. Omit this property to leave the stored value unchanged. Null is stored as false. | [optional] 

## Methods

### NewTenantUiMetadataItemUpdateRequest

`func NewTenantUiMetadataItemUpdateRequest() *TenantUiMetadataItemUpdateRequest`

NewTenantUiMetadataItemUpdateRequest instantiates a new TenantUiMetadataItemUpdateRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTenantUiMetadataItemUpdateRequestWithDefaults

`func NewTenantUiMetadataItemUpdateRequestWithDefaults() *TenantUiMetadataItemUpdateRequest`

NewTenantUiMetadataItemUpdateRequestWithDefaults instantiates a new TenantUiMetadataItemUpdateRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIframeWhiteList

`func (o *TenantUiMetadataItemUpdateRequest) GetIframeWhiteList() string`

GetIframeWhiteList returns the IframeWhiteList field if non-nil, zero value otherwise.

### GetIframeWhiteListOk

`func (o *TenantUiMetadataItemUpdateRequest) GetIframeWhiteListOk() (*string, bool)`

GetIframeWhiteListOk returns a tuple with the IframeWhiteList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIframeWhiteList

`func (o *TenantUiMetadataItemUpdateRequest) SetIframeWhiteList(v string)`

SetIframeWhiteList sets IframeWhiteList field to given value.

### HasIframeWhiteList

`func (o *TenantUiMetadataItemUpdateRequest) HasIframeWhiteList() bool`

HasIframeWhiteList returns a boolean if a field has been set.

### SetIframeWhiteListNil

`func (o *TenantUiMetadataItemUpdateRequest) SetIframeWhiteListNil(b bool)`

 SetIframeWhiteListNil sets the value for IframeWhiteList to be an explicit nil

### UnsetIframeWhiteList
`func (o *TenantUiMetadataItemUpdateRequest) UnsetIframeWhiteList()`

UnsetIframeWhiteList ensures that no value is present for IframeWhiteList, not even an explicit nil
### GetUsernameLabel

`func (o *TenantUiMetadataItemUpdateRequest) GetUsernameLabel() string`

GetUsernameLabel returns the UsernameLabel field if non-nil, zero value otherwise.

### GetUsernameLabelOk

`func (o *TenantUiMetadataItemUpdateRequest) GetUsernameLabelOk() (*string, bool)`

GetUsernameLabelOk returns a tuple with the UsernameLabel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUsernameLabel

`func (o *TenantUiMetadataItemUpdateRequest) SetUsernameLabel(v string)`

SetUsernameLabel sets UsernameLabel field to given value.

### HasUsernameLabel

`func (o *TenantUiMetadataItemUpdateRequest) HasUsernameLabel() bool`

HasUsernameLabel returns a boolean if a field has been set.

### SetUsernameLabelNil

`func (o *TenantUiMetadataItemUpdateRequest) SetUsernameLabelNil(b bool)`

 SetUsernameLabelNil sets the value for UsernameLabel to be an explicit nil

### UnsetUsernameLabel
`func (o *TenantUiMetadataItemUpdateRequest) UnsetUsernameLabel()`

UnsetUsernameLabel ensures that no value is present for UsernameLabel, not even an explicit nil
### GetUsernameEmptyText

`func (o *TenantUiMetadataItemUpdateRequest) GetUsernameEmptyText() string`

GetUsernameEmptyText returns the UsernameEmptyText field if non-nil, zero value otherwise.

### GetUsernameEmptyTextOk

`func (o *TenantUiMetadataItemUpdateRequest) GetUsernameEmptyTextOk() (*string, bool)`

GetUsernameEmptyTextOk returns a tuple with the UsernameEmptyText field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUsernameEmptyText

`func (o *TenantUiMetadataItemUpdateRequest) SetUsernameEmptyText(v string)`

SetUsernameEmptyText sets UsernameEmptyText field to given value.

### HasUsernameEmptyText

`func (o *TenantUiMetadataItemUpdateRequest) HasUsernameEmptyText() bool`

HasUsernameEmptyText returns a boolean if a field has been set.

### SetUsernameEmptyTextNil

`func (o *TenantUiMetadataItemUpdateRequest) SetUsernameEmptyTextNil(b bool)`

 SetUsernameEmptyTextNil sets the value for UsernameEmptyText to be an explicit nil

### UnsetUsernameEmptyText
`func (o *TenantUiMetadataItemUpdateRequest) UnsetUsernameEmptyText()`

UnsetUsernameEmptyText ensures that no value is present for UsernameEmptyText, not even an explicit nil
### GetInstanceBadgeDisplayName

`func (o *TenantUiMetadataItemUpdateRequest) GetInstanceBadgeDisplayName() string`

GetInstanceBadgeDisplayName returns the InstanceBadgeDisplayName field if non-nil, zero value otherwise.

### GetInstanceBadgeDisplayNameOk

`func (o *TenantUiMetadataItemUpdateRequest) GetInstanceBadgeDisplayNameOk() (*string, bool)`

GetInstanceBadgeDisplayNameOk returns a tuple with the InstanceBadgeDisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInstanceBadgeDisplayName

`func (o *TenantUiMetadataItemUpdateRequest) SetInstanceBadgeDisplayName(v string)`

SetInstanceBadgeDisplayName sets InstanceBadgeDisplayName field to given value.

### HasInstanceBadgeDisplayName

`func (o *TenantUiMetadataItemUpdateRequest) HasInstanceBadgeDisplayName() bool`

HasInstanceBadgeDisplayName returns a boolean if a field has been set.

### SetInstanceBadgeDisplayNameNil

`func (o *TenantUiMetadataItemUpdateRequest) SetInstanceBadgeDisplayNameNil(b bool)`

 SetInstanceBadgeDisplayNameNil sets the value for InstanceBadgeDisplayName to be an explicit nil

### UnsetInstanceBadgeDisplayName
`func (o *TenantUiMetadataItemUpdateRequest) UnsetInstanceBadgeDisplayName()`

UnsetInstanceBadgeDisplayName ensures that no value is present for InstanceBadgeDisplayName, not even an explicit nil
### GetInstanceBadgeColor

`func (o *TenantUiMetadataItemUpdateRequest) GetInstanceBadgeColor() string`

GetInstanceBadgeColor returns the InstanceBadgeColor field if non-nil, zero value otherwise.

### GetInstanceBadgeColorOk

`func (o *TenantUiMetadataItemUpdateRequest) GetInstanceBadgeColorOk() (*string, bool)`

GetInstanceBadgeColorOk returns a tuple with the InstanceBadgeColor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInstanceBadgeColor

`func (o *TenantUiMetadataItemUpdateRequest) SetInstanceBadgeColor(v string)`

SetInstanceBadgeColor sets InstanceBadgeColor field to given value.

### HasInstanceBadgeColor

`func (o *TenantUiMetadataItemUpdateRequest) HasInstanceBadgeColor() bool`

HasInstanceBadgeColor returns a boolean if a field has been set.

### SetInstanceBadgeColorNil

`func (o *TenantUiMetadataItemUpdateRequest) SetInstanceBadgeColorNil(b bool)`

 SetInstanceBadgeColorNil sets the value for InstanceBadgeColor to be an explicit nil

### UnsetInstanceBadgeColor
`func (o *TenantUiMetadataItemUpdateRequest) UnsetInstanceBadgeColor()`

UnsetInstanceBadgeColor ensures that no value is present for InstanceBadgeColor, not even an explicit nil
### GetInstanceBadgeVisible

`func (o *TenantUiMetadataItemUpdateRequest) GetInstanceBadgeVisible() bool`

GetInstanceBadgeVisible returns the InstanceBadgeVisible field if non-nil, zero value otherwise.

### GetInstanceBadgeVisibleOk

`func (o *TenantUiMetadataItemUpdateRequest) GetInstanceBadgeVisibleOk() (*bool, bool)`

GetInstanceBadgeVisibleOk returns a tuple with the InstanceBadgeVisible field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInstanceBadgeVisible

`func (o *TenantUiMetadataItemUpdateRequest) SetInstanceBadgeVisible(v bool)`

SetInstanceBadgeVisible sets InstanceBadgeVisible field to given value.

### HasInstanceBadgeVisible

`func (o *TenantUiMetadataItemUpdateRequest) HasInstanceBadgeVisible() bool`

HasInstanceBadgeVisible returns a boolean if a field has been set.

### SetInstanceBadgeVisibleNil

`func (o *TenantUiMetadataItemUpdateRequest) SetInstanceBadgeVisibleNil(b bool)`

 SetInstanceBadgeVisibleNil sets the value for InstanceBadgeVisible to be an explicit nil

### UnsetInstanceBadgeVisible
`func (o *TenantUiMetadataItemUpdateRequest) UnsetInstanceBadgeVisible()`

UnsetInstanceBadgeVisible ensures that no value is present for InstanceBadgeVisible, not even an explicit nil

