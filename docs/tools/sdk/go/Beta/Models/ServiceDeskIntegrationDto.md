---
id: service-desk-integration-dto
title: ServiceDeskIntegrationDto
pagination_label: ServiceDeskIntegrationDto
sidebar_label: ServiceDeskIntegrationDto
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'ServiceDeskIntegrationDto'] 
slug: /tools/sdk/go/beta/models/service-desk-integration-dto
tags: ['SDK', 'Software Development Kit', 'ServiceDeskIntegrationDto']
---

# ServiceDeskIntegrationDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** |  **string** | Service Desk integration&#39;s name. The name must be unique. | 
**Description** |  **string** | Service Desk integration&#39;s description. | 
**Type** |  **string** | Service Desk integration types:  - ServiceNowSDIM - ServiceNow  | [default to "ServiceNowSDIM"]
**OwnerRef** |  Pointer to [**OwnerDto**](owner-dto) |  | [optional] 
**ClusterRef** |  Pointer to [**SourceClusterDto**](source-cluster-dto) |  | [optional] 
**Cluster** |  Pointer to **string** | Cluster ID for the Service Desk integration (replaced by clusterRef, retained for backward compatibility). | [optional] 
**ManagedSources** |  Pointer to **[]string** | Source IDs for the Service Desk integration (replaced by provisioningConfig.managedSResourceRefs, but retained here for backward compatibility). | [optional] 
**ProvisioningConfig** |  Pointer to [**ProvisioningConfig**](provisioning-config) |  | [optional] 
**Attributes** |  **map[string]interface{}** | Service Desk integration&#39;s attributes. Validation constraints enforced by the implementation. | 
**BeforeProvisioningRule** |  Pointer to [**BeforeProvisioningRuleDto**](before-provisioning-rule-dto) |  | [optional] 

## Methods

### NewServiceDeskIntegrationDto

`func NewServiceDeskIntegrationDto(name string, description string, type_ string, attributes map[string]interface{}, ) *ServiceDeskIntegrationDto`

NewServiceDeskIntegrationDto instantiates a new ServiceDeskIntegrationDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewServiceDeskIntegrationDtoWithDefaults

`func NewServiceDeskIntegrationDtoWithDefaults() *ServiceDeskIntegrationDto`

NewServiceDeskIntegrationDtoWithDefaults instantiates a new ServiceDeskIntegrationDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *ServiceDeskIntegrationDto) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ServiceDeskIntegrationDto) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ServiceDeskIntegrationDto) SetName(v string)`

SetName sets Name field to given value.


### GetDescription

`func (o *ServiceDeskIntegrationDto) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ServiceDeskIntegrationDto) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ServiceDeskIntegrationDto) SetDescription(v string)`

SetDescription sets Description field to given value.


### GetType

`func (o *ServiceDeskIntegrationDto) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ServiceDeskIntegrationDto) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ServiceDeskIntegrationDto) SetType(v string)`

SetType sets Type field to given value.


### GetOwnerRef

`func (o *ServiceDeskIntegrationDto) GetOwnerRef() OwnerDto`

GetOwnerRef returns the OwnerRef field if non-nil, zero value otherwise.

### GetOwnerRefOk

`func (o *ServiceDeskIntegrationDto) GetOwnerRefOk() (*OwnerDto, bool)`

GetOwnerRefOk returns a tuple with the OwnerRef field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwnerRef

`func (o *ServiceDeskIntegrationDto) SetOwnerRef(v OwnerDto)`

SetOwnerRef sets OwnerRef field to given value.

### HasOwnerRef

`func (o *ServiceDeskIntegrationDto) HasOwnerRef() bool`

HasOwnerRef returns a boolean if a field has been set.

### GetClusterRef

`func (o *ServiceDeskIntegrationDto) GetClusterRef() SourceClusterDto`

GetClusterRef returns the ClusterRef field if non-nil, zero value otherwise.

### GetClusterRefOk

`func (o *ServiceDeskIntegrationDto) GetClusterRefOk() (*SourceClusterDto, bool)`

GetClusterRefOk returns a tuple with the ClusterRef field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClusterRef

`func (o *ServiceDeskIntegrationDto) SetClusterRef(v SourceClusterDto)`

SetClusterRef sets ClusterRef field to given value.

### HasClusterRef

`func (o *ServiceDeskIntegrationDto) HasClusterRef() bool`

HasClusterRef returns a boolean if a field has been set.

### GetCluster

`func (o *ServiceDeskIntegrationDto) GetCluster() string`

GetCluster returns the Cluster field if non-nil, zero value otherwise.

### GetClusterOk

`func (o *ServiceDeskIntegrationDto) GetClusterOk() (*string, bool)`

GetClusterOk returns a tuple with the Cluster field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCluster

`func (o *ServiceDeskIntegrationDto) SetCluster(v string)`

SetCluster sets Cluster field to given value.

### HasCluster

`func (o *ServiceDeskIntegrationDto) HasCluster() bool`

HasCluster returns a boolean if a field has been set.

### GetManagedSources

`func (o *ServiceDeskIntegrationDto) GetManagedSources() []string`

GetManagedSources returns the ManagedSources field if non-nil, zero value otherwise.

### GetManagedSourcesOk

`func (o *ServiceDeskIntegrationDto) GetManagedSourcesOk() (*[]string, bool)`

GetManagedSourcesOk returns a tuple with the ManagedSources field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManagedSources

`func (o *ServiceDeskIntegrationDto) SetManagedSources(v []string)`

SetManagedSources sets ManagedSources field to given value.

### HasManagedSources

`func (o *ServiceDeskIntegrationDto) HasManagedSources() bool`

HasManagedSources returns a boolean if a field has been set.

### GetProvisioningConfig

`func (o *ServiceDeskIntegrationDto) GetProvisioningConfig() ProvisioningConfig`

GetProvisioningConfig returns the ProvisioningConfig field if non-nil, zero value otherwise.

### GetProvisioningConfigOk

`func (o *ServiceDeskIntegrationDto) GetProvisioningConfigOk() (*ProvisioningConfig, bool)`

GetProvisioningConfigOk returns a tuple with the ProvisioningConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProvisioningConfig

`func (o *ServiceDeskIntegrationDto) SetProvisioningConfig(v ProvisioningConfig)`

SetProvisioningConfig sets ProvisioningConfig field to given value.

### HasProvisioningConfig

`func (o *ServiceDeskIntegrationDto) HasProvisioningConfig() bool`

HasProvisioningConfig returns a boolean if a field has been set.

### GetAttributes

`func (o *ServiceDeskIntegrationDto) GetAttributes() map[string]interface{}`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *ServiceDeskIntegrationDto) GetAttributesOk() (*map[string]interface{}, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *ServiceDeskIntegrationDto) SetAttributes(v map[string]interface{})`

SetAttributes sets Attributes field to given value.


### GetBeforeProvisioningRule

`func (o *ServiceDeskIntegrationDto) GetBeforeProvisioningRule() BeforeProvisioningRuleDto`

GetBeforeProvisioningRule returns the BeforeProvisioningRule field if non-nil, zero value otherwise.

### GetBeforeProvisioningRuleOk

`func (o *ServiceDeskIntegrationDto) GetBeforeProvisioningRuleOk() (*BeforeProvisioningRuleDto, bool)`

GetBeforeProvisioningRuleOk returns a tuple with the BeforeProvisioningRule field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBeforeProvisioningRule

`func (o *ServiceDeskIntegrationDto) SetBeforeProvisioningRule(v BeforeProvisioningRuleDto)`

SetBeforeProvisioningRule sets BeforeProvisioningRule field to given value.

### HasBeforeProvisioningRule

`func (o *ServiceDeskIntegrationDto) HasBeforeProvisioningRule() bool`

HasBeforeProvisioningRule returns a boolean if a field has been set.


[[Back to top]](#) 


