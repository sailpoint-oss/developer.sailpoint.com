---
id: v1-provisioningconfig
title: Provisioningconfig
pagination_label: Provisioningconfig
sidebar_label: Provisioningconfig
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Provisioningconfig', 'V1Provisioningconfig'] 
slug: /tools/sdk/go/servicedeskintegration/models/provisioningconfig
tags: ['SDK', 'Software Development Kit', 'Provisioningconfig', 'V1Provisioningconfig']
---

# Provisioningconfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**UniversalManager** | Pointer to **bool** | Specifies whether this configuration is used to manage provisioning requests for all sources from the org.  If true, no managedResourceRefs are allowed. | [optional] [readonly] [default to false]
**ManagedResourceRefs** | Pointer to [**[]Servicedesksource**](servicedesksource) | References to sources for the Service Desk integration template.  May only be specified if universalManager is false. | [optional] 
**PlanInitializerScript** | Pointer to [**NullableProvisioningconfigPlanInitializerScript**](provisioningconfig-plan-initializer-script) |  | [optional] 
**NoProvisioningRequests** | Pointer to **bool** | Name of an attribute that when true disables the saving of ProvisioningRequest objects whenever plans are sent through this integration. | [optional] [default to false]
**ProvisioningRequestExpiration** | Pointer to **int32** | When saving pending requests is enabled, this defines the number of hours the request is allowed to live before it is considered expired and no longer affects plan compilation. | [optional] 

## Methods

### NewProvisioningconfig

`func NewProvisioningconfig() *Provisioningconfig`

NewProvisioningconfig instantiates a new Provisioningconfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProvisioningconfigWithDefaults

`func NewProvisioningconfigWithDefaults() *Provisioningconfig`

NewProvisioningconfigWithDefaults instantiates a new Provisioningconfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUniversalManager

`func (o *Provisioningconfig) GetUniversalManager() bool`

GetUniversalManager returns the UniversalManager field if non-nil, zero value otherwise.

### GetUniversalManagerOk

`func (o *Provisioningconfig) GetUniversalManagerOk() (*bool, bool)`

GetUniversalManagerOk returns a tuple with the UniversalManager field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUniversalManager

`func (o *Provisioningconfig) SetUniversalManager(v bool)`

SetUniversalManager sets UniversalManager field to given value.

### HasUniversalManager

`func (o *Provisioningconfig) HasUniversalManager() bool`

HasUniversalManager returns a boolean if a field has been set.

### GetManagedResourceRefs

`func (o *Provisioningconfig) GetManagedResourceRefs() []Servicedesksource`

GetManagedResourceRefs returns the ManagedResourceRefs field if non-nil, zero value otherwise.

### GetManagedResourceRefsOk

`func (o *Provisioningconfig) GetManagedResourceRefsOk() (*[]Servicedesksource, bool)`

GetManagedResourceRefsOk returns a tuple with the ManagedResourceRefs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManagedResourceRefs

`func (o *Provisioningconfig) SetManagedResourceRefs(v []Servicedesksource)`

SetManagedResourceRefs sets ManagedResourceRefs field to given value.

### HasManagedResourceRefs

`func (o *Provisioningconfig) HasManagedResourceRefs() bool`

HasManagedResourceRefs returns a boolean if a field has been set.

### GetPlanInitializerScript

`func (o *Provisioningconfig) GetPlanInitializerScript() ProvisioningconfigPlanInitializerScript`

GetPlanInitializerScript returns the PlanInitializerScript field if non-nil, zero value otherwise.

### GetPlanInitializerScriptOk

`func (o *Provisioningconfig) GetPlanInitializerScriptOk() (*ProvisioningconfigPlanInitializerScript, bool)`

GetPlanInitializerScriptOk returns a tuple with the PlanInitializerScript field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPlanInitializerScript

`func (o *Provisioningconfig) SetPlanInitializerScript(v ProvisioningconfigPlanInitializerScript)`

SetPlanInitializerScript sets PlanInitializerScript field to given value.

### HasPlanInitializerScript

`func (o *Provisioningconfig) HasPlanInitializerScript() bool`

HasPlanInitializerScript returns a boolean if a field has been set.

### SetPlanInitializerScriptNil

`func (o *Provisioningconfig) SetPlanInitializerScriptNil(b bool)`

 SetPlanInitializerScriptNil sets the value for PlanInitializerScript to be an explicit nil

### UnsetPlanInitializerScript
`func (o *Provisioningconfig) UnsetPlanInitializerScript()`

UnsetPlanInitializerScript ensures that no value is present for PlanInitializerScript, not even an explicit nil
### GetNoProvisioningRequests

`func (o *Provisioningconfig) GetNoProvisioningRequests() bool`

GetNoProvisioningRequests returns the NoProvisioningRequests field if non-nil, zero value otherwise.

### GetNoProvisioningRequestsOk

`func (o *Provisioningconfig) GetNoProvisioningRequestsOk() (*bool, bool)`

GetNoProvisioningRequestsOk returns a tuple with the NoProvisioningRequests field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNoProvisioningRequests

`func (o *Provisioningconfig) SetNoProvisioningRequests(v bool)`

SetNoProvisioningRequests sets NoProvisioningRequests field to given value.

### HasNoProvisioningRequests

`func (o *Provisioningconfig) HasNoProvisioningRequests() bool`

HasNoProvisioningRequests returns a boolean if a field has been set.

### GetProvisioningRequestExpiration

`func (o *Provisioningconfig) GetProvisioningRequestExpiration() int32`

GetProvisioningRequestExpiration returns the ProvisioningRequestExpiration field if non-nil, zero value otherwise.

### GetProvisioningRequestExpirationOk

`func (o *Provisioningconfig) GetProvisioningRequestExpirationOk() (*int32, bool)`

GetProvisioningRequestExpirationOk returns a tuple with the ProvisioningRequestExpiration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProvisioningRequestExpiration

`func (o *Provisioningconfig) SetProvisioningRequestExpiration(v int32)`

SetProvisioningRequestExpiration sets ProvisioningRequestExpiration field to given value.

### HasProvisioningRequestExpiration

`func (o *Provisioningconfig) HasProvisioningRequestExpiration() bool`

HasProvisioningRequestExpiration returns a boolean if a field has been set.


