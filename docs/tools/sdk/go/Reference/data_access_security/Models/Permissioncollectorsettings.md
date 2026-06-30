---
id: v1-permissioncollectorsettings
title: Permissioncollectorsettings
pagination_label: Permissioncollectorsettings
sidebar_label: Permissioncollectorsettings
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Permissioncollectorsettings', 'V1Permissioncollectorsettings'] 
slug: /tools/sdk/go/dataaccesssecurity/models/permissioncollectorsettings
tags: ['SDK', 'Software Development Kit', 'Permissioncollectorsettings', 'V1Permissioncollectorsettings']
---

# Permissioncollectorsettings

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

### NewPermissioncollectorsettings

`func NewPermissioncollectorsettings() *Permissioncollectorsettings`

NewPermissioncollectorsettings instantiates a new Permissioncollectorsettings object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPermissioncollectorsettingsWithDefaults

`func NewPermissioncollectorsettingsWithDefaults() *Permissioncollectorsettings`

NewPermissioncollectorsettingsWithDefaults instantiates a new Permissioncollectorsettings object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIsEnabled

`func (o *Permissioncollectorsettings) GetIsEnabled() bool`

GetIsEnabled returns the IsEnabled field if non-nil, zero value otherwise.

### GetIsEnabledOk

`func (o *Permissioncollectorsettings) GetIsEnabledOk() (*bool, bool)`

GetIsEnabledOk returns a tuple with the IsEnabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsEnabled

`func (o *Permissioncollectorsettings) SetIsEnabled(v bool)`

SetIsEnabled sets IsEnabled field to given value.

### HasIsEnabled

`func (o *Permissioncollectorsettings) HasIsEnabled() bool`

HasIsEnabled returns a boolean if a field has been set.

### GetClusterId

`func (o *Permissioncollectorsettings) GetClusterId() string`

GetClusterId returns the ClusterId field if non-nil, zero value otherwise.

### GetClusterIdOk

`func (o *Permissioncollectorsettings) GetClusterIdOk() (*string, bool)`

GetClusterIdOk returns a tuple with the ClusterId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClusterId

`func (o *Permissioncollectorsettings) SetClusterId(v string)`

SetClusterId sets ClusterId field to given value.

### HasClusterId

`func (o *Permissioncollectorsettings) HasClusterId() bool`

HasClusterId returns a boolean if a field has been set.

### SetClusterIdNil

`func (o *Permissioncollectorsettings) SetClusterIdNil(b bool)`

 SetClusterIdNil sets the value for ClusterId to be an explicit nil

### UnsetClusterId
`func (o *Permissioncollectorsettings) UnsetClusterId()`

UnsetClusterId ensures that no value is present for ClusterId, not even an explicit nil
### GetAnalyzeUniquePermissions

`func (o *Permissioncollectorsettings) GetAnalyzeUniquePermissions() bool`

GetAnalyzeUniquePermissions returns the AnalyzeUniquePermissions field if non-nil, zero value otherwise.

### GetAnalyzeUniquePermissionsOk

`func (o *Permissioncollectorsettings) GetAnalyzeUniquePermissionsOk() (*bool, bool)`

GetAnalyzeUniquePermissionsOk returns a tuple with the AnalyzeUniquePermissions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAnalyzeUniquePermissions

`func (o *Permissioncollectorsettings) SetAnalyzeUniquePermissions(v bool)`

SetAnalyzeUniquePermissions sets AnalyzeUniquePermissions field to given value.

### HasAnalyzeUniquePermissions

`func (o *Permissioncollectorsettings) HasAnalyzeUniquePermissions() bool`

HasAnalyzeUniquePermissions returns a boolean if a field has been set.

### SetAnalyzeUniquePermissionsNil

`func (o *Permissioncollectorsettings) SetAnalyzeUniquePermissionsNil(b bool)`

 SetAnalyzeUniquePermissionsNil sets the value for AnalyzeUniquePermissions to be an explicit nil

### UnsetAnalyzeUniquePermissions
`func (o *Permissioncollectorsettings) UnsetAnalyzeUniquePermissions()`

UnsetAnalyzeUniquePermissions ensures that no value is present for AnalyzeUniquePermissions, not even an explicit nil
### GetCalculateEffectivePermissions

`func (o *Permissioncollectorsettings) GetCalculateEffectivePermissions() bool`

GetCalculateEffectivePermissions returns the CalculateEffectivePermissions field if non-nil, zero value otherwise.

### GetCalculateEffectivePermissionsOk

`func (o *Permissioncollectorsettings) GetCalculateEffectivePermissionsOk() (*bool, bool)`

GetCalculateEffectivePermissionsOk returns a tuple with the CalculateEffectivePermissions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCalculateEffectivePermissions

`func (o *Permissioncollectorsettings) SetCalculateEffectivePermissions(v bool)`

SetCalculateEffectivePermissions sets CalculateEffectivePermissions field to given value.

### HasCalculateEffectivePermissions

`func (o *Permissioncollectorsettings) HasCalculateEffectivePermissions() bool`

HasCalculateEffectivePermissions returns a boolean if a field has been set.

### SetCalculateEffectivePermissionsNil

`func (o *Permissioncollectorsettings) SetCalculateEffectivePermissionsNil(b bool)`

 SetCalculateEffectivePermissionsNil sets the value for CalculateEffectivePermissions to be an explicit nil

### UnsetCalculateEffectivePermissions
`func (o *Permissioncollectorsettings) UnsetCalculateEffectivePermissions()`

UnsetCalculateEffectivePermissions ensures that no value is present for CalculateEffectivePermissions, not even an explicit nil
### GetCalculateRiskiestPermissions

`func (o *Permissioncollectorsettings) GetCalculateRiskiestPermissions() bool`

GetCalculateRiskiestPermissions returns the CalculateRiskiestPermissions field if non-nil, zero value otherwise.

### GetCalculateRiskiestPermissionsOk

`func (o *Permissioncollectorsettings) GetCalculateRiskiestPermissionsOk() (*bool, bool)`

GetCalculateRiskiestPermissionsOk returns a tuple with the CalculateRiskiestPermissions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCalculateRiskiestPermissions

`func (o *Permissioncollectorsettings) SetCalculateRiskiestPermissions(v bool)`

SetCalculateRiskiestPermissions sets CalculateRiskiestPermissions field to given value.

### HasCalculateRiskiestPermissions

`func (o *Permissioncollectorsettings) HasCalculateRiskiestPermissions() bool`

HasCalculateRiskiestPermissions returns a boolean if a field has been set.

### SetCalculateRiskiestPermissionsNil

`func (o *Permissioncollectorsettings) SetCalculateRiskiestPermissionsNil(b bool)`

 SetCalculateRiskiestPermissionsNil sets the value for CalculateRiskiestPermissions to be an explicit nil

### UnsetCalculateRiskiestPermissions
`func (o *Permissioncollectorsettings) UnsetCalculateRiskiestPermissions()`

UnsetCalculateRiskiestPermissions ensures that no value is present for CalculateRiskiestPermissions, not even an explicit nil
### GetEffectivePermissionsSource

`func (o *Permissioncollectorsettings) GetEffectivePermissionsSource() string`

GetEffectivePermissionsSource returns the EffectivePermissionsSource field if non-nil, zero value otherwise.

### GetEffectivePermissionsSourceOk

`func (o *Permissioncollectorsettings) GetEffectivePermissionsSourceOk() (*string, bool)`

GetEffectivePermissionsSourceOk returns a tuple with the EffectivePermissionsSource field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEffectivePermissionsSource

`func (o *Permissioncollectorsettings) SetEffectivePermissionsSource(v string)`

SetEffectivePermissionsSource sets EffectivePermissionsSource field to given value.

### HasEffectivePermissionsSource

`func (o *Permissioncollectorsettings) HasEffectivePermissionsSource() bool`

HasEffectivePermissionsSource returns a boolean if a field has been set.

### SetEffectivePermissionsSourceNil

`func (o *Permissioncollectorsettings) SetEffectivePermissionsSourceNil(b bool)`

 SetEffectivePermissionsSourceNil sets the value for EffectivePermissionsSource to be an explicit nil

### UnsetEffectivePermissionsSource
`func (o *Permissioncollectorsettings) UnsetEffectivePermissionsSource()`

UnsetEffectivePermissionsSource ensures that no value is present for EffectivePermissionsSource, not even an explicit nil

