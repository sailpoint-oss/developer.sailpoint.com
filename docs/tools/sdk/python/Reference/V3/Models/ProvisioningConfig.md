---
id: provisioning-config
title: ProvisioningConfig
pagination_label: ProvisioningConfig
sidebar_label: ProvisioningConfig
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ProvisioningConfig', 'ProvisioningConfig'] 
slug: /tools/sdk/go/v3/models/provisioning-config
tags: ['SDK', 'Software Development Kit', 'ProvisioningConfig', 'ProvisioningConfig']
---

# ProvisioningConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**UniversalManager** | Pointer to **bool** | Specifies whether this configuration is used to manage provisioning requests for all sources from the org.  If true, no managedResourceRefs are allowed. | [optional] [readonly] [default to false]
**ManagedResourceRefs** | Pointer to [**[]ServiceDeskSource**](service-desk-source) | References to sources for the Service Desk integration template.  May only be specified if universalManager is false. | [optional] 
**PlanInitializerScript** | Pointer to [**NullableProvisioningConfigPlanInitializerScript**](provisioning-config-plan-initializer-script) |  | [optional] 
**NoProvisioningRequests** | Pointer to **bool** | Name of an attribute that when true disables the saving of ProvisioningRequest objects whenever plans are sent through this integration. | [optional] [default to false]
**ProvisioningRequestExpiration** | Pointer to **int32** | When saving pending requests is enabled, this defines the number of hours the request is allowed to live before it is considered expired and no longer affects plan compilation. | [optional] 

## Methods

### NewProvisioningConfig

`func NewProvisioningConfig() *ProvisioningConfig`

NewProvisioningConfig instantiates a new ProvisioningConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProvisioningConfigWithDefaults

`func NewProvisioningConfigWithDefaults() *ProvisioningConfig`

NewProvisioningConfigWithDefaults instantiates a new ProvisioningConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUniversalManager

`func (o *ProvisioningConfig) GetUniversalManager() bool`

GetUniversalManager returns the UniversalManager field if non-nil, zero value otherwise.

### GetUniversalManagerOk

`func (o *ProvisioningConfig) GetUniversalManagerOk() (*bool, bool)`

GetUniversalManagerOk returns a tuple with the UniversalManager field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUniversalManager

`func (o *ProvisioningConfig) SetUniversalManager(v bool)`

SetUniversalManager sets UniversalManager field to given value.

### HasUniversalManager

`func (o *ProvisioningConfig) HasUniversalManager() bool`

HasUniversalManager returns a boolean if a field has been set.

### GetManagedResourceRefs

`func (o *ProvisioningConfig) GetManagedResourceRefs() []ServiceDeskSource`

GetManagedResourceRefs returns the ManagedResourceRefs field if non-nil, zero value otherwise.

### GetManagedResourceRefsOk

`func (o *ProvisioningConfig) GetManagedResourceRefsOk() (*[]ServiceDeskSource, bool)`

GetManagedResourceRefsOk returns a tuple with the ManagedResourceRefs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManagedResourceRefs

`func (o *ProvisioningConfig) SetManagedResourceRefs(v []ServiceDeskSource)`

SetManagedResourceRefs sets ManagedResourceRefs field to given value.

### HasManagedResourceRefs

`func (o *ProvisioningConfig) HasManagedResourceRefs() bool`

HasManagedResourceRefs returns a boolean if a field has been set.

### GetPlanInitializerScript

`func (o *ProvisioningConfig) GetPlanInitializerScript() ProvisioningConfigPlanInitializerScript`

GetPlanInitializerScript returns the PlanInitializerScript field if non-nil, zero value otherwise.

### GetPlanInitializerScriptOk

`func (o *ProvisioningConfig) GetPlanInitializerScriptOk() (*ProvisioningConfigPlanInitializerScript, bool)`

GetPlanInitializerScriptOk returns a tuple with the PlanInitializerScript field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPlanInitializerScript

`func (o *ProvisioningConfig) SetPlanInitializerScript(v ProvisioningConfigPlanInitializerScript)`

SetPlanInitializerScript sets PlanInitializerScript field to given value.

### HasPlanInitializerScript

`func (o *ProvisioningConfig) HasPlanInitializerScript() bool`

HasPlanInitializerScript returns a boolean if a field has been set.

### SetPlanInitializerScriptNil

`func (o *ProvisioningConfig) SetPlanInitializerScriptNil(b bool)`

 SetPlanInitializerScriptNil sets the value for PlanInitializerScript to be an explicit nil

### UnsetPlanInitializerScript
`func (o *ProvisioningConfig) UnsetPlanInitializerScript()`

UnsetPlanInitializerScript ensures that no value is present for PlanInitializerScript, not even an explicit nil
### GetNoProvisioningRequests

`func (o *ProvisioningConfig) GetNoProvisioningRequests() bool`

GetNoProvisioningRequests returns the NoProvisioningRequests field if non-nil, zero value otherwise.

### GetNoProvisioningRequestsOk

`func (o *ProvisioningConfig) GetNoProvisioningRequestsOk() (*bool, bool)`

GetNoProvisioningRequestsOk returns a tuple with the NoProvisioningRequests field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNoProvisioningRequests

`func (o *ProvisioningConfig) SetNoProvisioningRequests(v bool)`

SetNoProvisioningRequests sets NoProvisioningRequests field to given value.

### HasNoProvisioningRequests

`func (o *ProvisioningConfig) HasNoProvisioningRequests() bool`

HasNoProvisioningRequests returns a boolean if a field has been set.

### GetProvisioningRequestExpiration

`func (o *ProvisioningConfig) GetProvisioningRequestExpiration() int32`

GetProvisioningRequestExpiration returns the ProvisioningRequestExpiration field if non-nil, zero value otherwise.

### GetProvisioningRequestExpirationOk

`func (o *ProvisioningConfig) GetProvisioningRequestExpirationOk() (*int32, bool)`

GetProvisioningRequestExpirationOk returns a tuple with the ProvisioningRequestExpiration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProvisioningRequestExpiration

`func (o *ProvisioningConfig) SetProvisioningRequestExpiration(v int32)`

SetProvisioningRequestExpiration sets ProvisioningRequestExpiration field to given value.

### HasProvisioningRequestExpiration

`func (o *ProvisioningConfig) HasProvisioningRequestExpiration() bool`

HasProvisioningRequestExpiration returns a boolean if a field has been set.


