---
id: v2025-permission-collector-settings
title: PermissionCollectorSettings
pagination_label: PermissionCollectorSettings
sidebar_label: PermissionCollectorSettings
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'PermissionCollectorSettings', 'V2025PermissionCollectorSettings'] 
slug: /tools/sdk/go/v2025/models/permission-collector-settings
tags: ['SDK', 'Software Development Kit', 'PermissionCollectorSettings', 'V2025PermissionCollectorSettings']
---

# PermissionCollectorSettings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IsEnabled** | Pointer to **bool** | Indicates whether the feature or configuration is enabled. | [optional] [default to false]
**ClusterId** | Pointer to **NullableString** | The identifier of the cluster associated with this configuration, if applicable. | [optional] 
**AnalyzeUniquePermissions** | Pointer to **NullableBool** | Indicates whether unique permissions should be analyzed for resources. | [optional] [default to false]
**CalculateEffectivePermissions** | Pointer to **NullableBool** | Indicates whether effective permissions should be calculated. | [optional] [default to false]
**CalculateRiskiestPermissions** | Pointer to **NullableBool** | Indicates whether riskiest permissions should be calculated. | [optional] [default to false]
**EffectivePermissionsSource** | Pointer to **NullableString** | Source for effective permissions calculation. | [optional] 

## Methods

### NewPermissionCollectorSettings

`func NewPermissionCollectorSettings() *PermissionCollectorSettings`

NewPermissionCollectorSettings instantiates a new PermissionCollectorSettings object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPermissionCollectorSettingsWithDefaults

`func NewPermissionCollectorSettingsWithDefaults() *PermissionCollectorSettings`

NewPermissionCollectorSettingsWithDefaults instantiates a new PermissionCollectorSettings object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIsEnabled

`func (o *PermissionCollectorSettings) GetIsEnabled() bool`

GetIsEnabled returns the IsEnabled field if non-nil, zero value otherwise.

### GetIsEnabledOk

`func (o *PermissionCollectorSettings) GetIsEnabledOk() (*bool, bool)`

GetIsEnabledOk returns a tuple with the IsEnabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsEnabled

`func (o *PermissionCollectorSettings) SetIsEnabled(v bool)`

SetIsEnabled sets IsEnabled field to given value.

### HasIsEnabled

`func (o *PermissionCollectorSettings) HasIsEnabled() bool`

HasIsEnabled returns a boolean if a field has been set.

### GetClusterId

`func (o *PermissionCollectorSettings) GetClusterId() string`

GetClusterId returns the ClusterId field if non-nil, zero value otherwise.

### GetClusterIdOk

`func (o *PermissionCollectorSettings) GetClusterIdOk() (*string, bool)`

GetClusterIdOk returns a tuple with the ClusterId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClusterId

`func (o *PermissionCollectorSettings) SetClusterId(v string)`

SetClusterId sets ClusterId field to given value.

### HasClusterId

`func (o *PermissionCollectorSettings) HasClusterId() bool`

HasClusterId returns a boolean if a field has been set.

### SetClusterIdNil

`func (o *PermissionCollectorSettings) SetClusterIdNil(b bool)`

 SetClusterIdNil sets the value for ClusterId to be an explicit nil

### UnsetClusterId
`func (o *PermissionCollectorSettings) UnsetClusterId()`

UnsetClusterId ensures that no value is present for ClusterId, not even an explicit nil
### GetAnalyzeUniquePermissions

`func (o *PermissionCollectorSettings) GetAnalyzeUniquePermissions() bool`

GetAnalyzeUniquePermissions returns the AnalyzeUniquePermissions field if non-nil, zero value otherwise.

### GetAnalyzeUniquePermissionsOk

`func (o *PermissionCollectorSettings) GetAnalyzeUniquePermissionsOk() (*bool, bool)`

GetAnalyzeUniquePermissionsOk returns a tuple with the AnalyzeUniquePermissions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAnalyzeUniquePermissions

`func (o *PermissionCollectorSettings) SetAnalyzeUniquePermissions(v bool)`

SetAnalyzeUniquePermissions sets AnalyzeUniquePermissions field to given value.

### HasAnalyzeUniquePermissions

`func (o *PermissionCollectorSettings) HasAnalyzeUniquePermissions() bool`

HasAnalyzeUniquePermissions returns a boolean if a field has been set.

### SetAnalyzeUniquePermissionsNil

`func (o *PermissionCollectorSettings) SetAnalyzeUniquePermissionsNil(b bool)`

 SetAnalyzeUniquePermissionsNil sets the value for AnalyzeUniquePermissions to be an explicit nil

### UnsetAnalyzeUniquePermissions
`func (o *PermissionCollectorSettings) UnsetAnalyzeUniquePermissions()`

UnsetAnalyzeUniquePermissions ensures that no value is present for AnalyzeUniquePermissions, not even an explicit nil
### GetCalculateEffectivePermissions

`func (o *PermissionCollectorSettings) GetCalculateEffectivePermissions() bool`

GetCalculateEffectivePermissions returns the CalculateEffectivePermissions field if non-nil, zero value otherwise.

### GetCalculateEffectivePermissionsOk

`func (o *PermissionCollectorSettings) GetCalculateEffectivePermissionsOk() (*bool, bool)`

GetCalculateEffectivePermissionsOk returns a tuple with the CalculateEffectivePermissions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCalculateEffectivePermissions

`func (o *PermissionCollectorSettings) SetCalculateEffectivePermissions(v bool)`

SetCalculateEffectivePermissions sets CalculateEffectivePermissions field to given value.

### HasCalculateEffectivePermissions

`func (o *PermissionCollectorSettings) HasCalculateEffectivePermissions() bool`

HasCalculateEffectivePermissions returns a boolean if a field has been set.

### SetCalculateEffectivePermissionsNil

`func (o *PermissionCollectorSettings) SetCalculateEffectivePermissionsNil(b bool)`

 SetCalculateEffectivePermissionsNil sets the value for CalculateEffectivePermissions to be an explicit nil

### UnsetCalculateEffectivePermissions
`func (o *PermissionCollectorSettings) UnsetCalculateEffectivePermissions()`

UnsetCalculateEffectivePermissions ensures that no value is present for CalculateEffectivePermissions, not even an explicit nil
### GetCalculateRiskiestPermissions

`func (o *PermissionCollectorSettings) GetCalculateRiskiestPermissions() bool`

GetCalculateRiskiestPermissions returns the CalculateRiskiestPermissions field if non-nil, zero value otherwise.

### GetCalculateRiskiestPermissionsOk

`func (o *PermissionCollectorSettings) GetCalculateRiskiestPermissionsOk() (*bool, bool)`

GetCalculateRiskiestPermissionsOk returns a tuple with the CalculateRiskiestPermissions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCalculateRiskiestPermissions

`func (o *PermissionCollectorSettings) SetCalculateRiskiestPermissions(v bool)`

SetCalculateRiskiestPermissions sets CalculateRiskiestPermissions field to given value.

### HasCalculateRiskiestPermissions

`func (o *PermissionCollectorSettings) HasCalculateRiskiestPermissions() bool`

HasCalculateRiskiestPermissions returns a boolean if a field has been set.

### SetCalculateRiskiestPermissionsNil

`func (o *PermissionCollectorSettings) SetCalculateRiskiestPermissionsNil(b bool)`

 SetCalculateRiskiestPermissionsNil sets the value for CalculateRiskiestPermissions to be an explicit nil

### UnsetCalculateRiskiestPermissions
`func (o *PermissionCollectorSettings) UnsetCalculateRiskiestPermissions()`

UnsetCalculateRiskiestPermissions ensures that no value is present for CalculateRiskiestPermissions, not even an explicit nil
### GetEffectivePermissionsSource

`func (o *PermissionCollectorSettings) GetEffectivePermissionsSource() string`

GetEffectivePermissionsSource returns the EffectivePermissionsSource field if non-nil, zero value otherwise.

### GetEffectivePermissionsSourceOk

`func (o *PermissionCollectorSettings) GetEffectivePermissionsSourceOk() (*string, bool)`

GetEffectivePermissionsSourceOk returns a tuple with the EffectivePermissionsSource field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEffectivePermissionsSource

`func (o *PermissionCollectorSettings) SetEffectivePermissionsSource(v string)`

SetEffectivePermissionsSource sets EffectivePermissionsSource field to given value.

### HasEffectivePermissionsSource

`func (o *PermissionCollectorSettings) HasEffectivePermissionsSource() bool`

HasEffectivePermissionsSource returns a boolean if a field has been set.

### SetEffectivePermissionsSourceNil

`func (o *PermissionCollectorSettings) SetEffectivePermissionsSourceNil(b bool)`

 SetEffectivePermissionsSourceNil sets the value for EffectivePermissionsSource to be an explicit nil

### UnsetEffectivePermissionsSource
`func (o *PermissionCollectorSettings) UnsetEffectivePermissionsSource()`

UnsetEffectivePermissionsSource ensures that no value is present for EffectivePermissionsSource, not even an explicit nil

