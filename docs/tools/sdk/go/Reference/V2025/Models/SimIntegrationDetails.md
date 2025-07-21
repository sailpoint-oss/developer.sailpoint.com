---
id: v2025-sim-integration-details
title: SimIntegrationDetails
pagination_label: SimIntegrationDetails
sidebar_label: SimIntegrationDetails
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SimIntegrationDetails', 'V2025SimIntegrationDetails'] 
slug: /tools/sdk/go/v2025/models/sim-integration-details
tags: ['SDK', 'Software Development Kit', 'SimIntegrationDetails', 'V2025SimIntegrationDetails']
---

# SimIntegrationDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | System-generated unique ID of the Object | [optional] [readonly] 
**Name** | **NullableString** | Name of the Object | 
**Created** | Pointer to **SailPointTime** | Creation date of the Object | [optional] [readonly] 
**Modified** | Pointer to **SailPointTime** | Last modification date of the Object | [optional] [readonly] 
**Description** | Pointer to **string** | The description of the integration | [optional] 
**Type** | Pointer to **string** | The integration type | [optional] 
**Attributes** | Pointer to **map[string]interface{}** | The attributes map containing the credentials used to configure the integration. | [optional] 
**Sources** | Pointer to **[]string** | The list of sources (managed resources) | [optional] 
**Cluster** | Pointer to **string** | The cluster/proxy | [optional] 
**StatusMap** | Pointer to **map[string]interface{}** | Custom mapping between the integration result and the provisioning result | [optional] 
**Request** | Pointer to **map[string]interface{}** | Request data to customize desc and body of the created ticket | [optional] 
**BeforeProvisioningRule** | Pointer to [**SimIntegrationDetailsAllOfBeforeProvisioningRule**](sim-integration-details-all-of-before-provisioning-rule) |  | [optional] 

## Methods

### NewSimIntegrationDetails

`func NewSimIntegrationDetails(name NullableString, ) *SimIntegrationDetails`

NewSimIntegrationDetails instantiates a new SimIntegrationDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSimIntegrationDetailsWithDefaults

`func NewSimIntegrationDetailsWithDefaults() *SimIntegrationDetails`

NewSimIntegrationDetailsWithDefaults instantiates a new SimIntegrationDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *SimIntegrationDetails) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *SimIntegrationDetails) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *SimIntegrationDetails) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *SimIntegrationDetails) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *SimIntegrationDetails) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *SimIntegrationDetails) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *SimIntegrationDetails) SetName(v string)`

SetName sets Name field to given value.


### SetNameNil

`func (o *SimIntegrationDetails) SetNameNil(b bool)`

 SetNameNil sets the value for Name to be an explicit nil

### UnsetName
`func (o *SimIntegrationDetails) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil
### GetCreated

`func (o *SimIntegrationDetails) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *SimIntegrationDetails) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *SimIntegrationDetails) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *SimIntegrationDetails) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *SimIntegrationDetails) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *SimIntegrationDetails) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *SimIntegrationDetails) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *SimIntegrationDetails) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetDescription

`func (o *SimIntegrationDetails) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *SimIntegrationDetails) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *SimIntegrationDetails) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *SimIntegrationDetails) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetType

`func (o *SimIntegrationDetails) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *SimIntegrationDetails) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *SimIntegrationDetails) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *SimIntegrationDetails) HasType() bool`

HasType returns a boolean if a field has been set.

### GetAttributes

`func (o *SimIntegrationDetails) GetAttributes() map[string]interface{}`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *SimIntegrationDetails) GetAttributesOk() (*map[string]interface{}, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *SimIntegrationDetails) SetAttributes(v map[string]interface{})`

SetAttributes sets Attributes field to given value.

### HasAttributes

`func (o *SimIntegrationDetails) HasAttributes() bool`

HasAttributes returns a boolean if a field has been set.

### SetAttributesNil

`func (o *SimIntegrationDetails) SetAttributesNil(b bool)`

 SetAttributesNil sets the value for Attributes to be an explicit nil

### UnsetAttributes
`func (o *SimIntegrationDetails) UnsetAttributes()`

UnsetAttributes ensures that no value is present for Attributes, not even an explicit nil
### GetSources

`func (o *SimIntegrationDetails) GetSources() []string`

GetSources returns the Sources field if non-nil, zero value otherwise.

### GetSourcesOk

`func (o *SimIntegrationDetails) GetSourcesOk() (*[]string, bool)`

GetSourcesOk returns a tuple with the Sources field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSources

`func (o *SimIntegrationDetails) SetSources(v []string)`

SetSources sets Sources field to given value.

### HasSources

`func (o *SimIntegrationDetails) HasSources() bool`

HasSources returns a boolean if a field has been set.

### GetCluster

`func (o *SimIntegrationDetails) GetCluster() string`

GetCluster returns the Cluster field if non-nil, zero value otherwise.

### GetClusterOk

`func (o *SimIntegrationDetails) GetClusterOk() (*string, bool)`

GetClusterOk returns a tuple with the Cluster field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCluster

`func (o *SimIntegrationDetails) SetCluster(v string)`

SetCluster sets Cluster field to given value.

### HasCluster

`func (o *SimIntegrationDetails) HasCluster() bool`

HasCluster returns a boolean if a field has been set.

### GetStatusMap

`func (o *SimIntegrationDetails) GetStatusMap() map[string]interface{}`

GetStatusMap returns the StatusMap field if non-nil, zero value otherwise.

### GetStatusMapOk

`func (o *SimIntegrationDetails) GetStatusMapOk() (*map[string]interface{}, bool)`

GetStatusMapOk returns a tuple with the StatusMap field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatusMap

`func (o *SimIntegrationDetails) SetStatusMap(v map[string]interface{})`

SetStatusMap sets StatusMap field to given value.

### HasStatusMap

`func (o *SimIntegrationDetails) HasStatusMap() bool`

HasStatusMap returns a boolean if a field has been set.

### GetRequest

`func (o *SimIntegrationDetails) GetRequest() map[string]interface{}`

GetRequest returns the Request field if non-nil, zero value otherwise.

### GetRequestOk

`func (o *SimIntegrationDetails) GetRequestOk() (*map[string]interface{}, bool)`

GetRequestOk returns a tuple with the Request field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequest

`func (o *SimIntegrationDetails) SetRequest(v map[string]interface{})`

SetRequest sets Request field to given value.

### HasRequest

`func (o *SimIntegrationDetails) HasRequest() bool`

HasRequest returns a boolean if a field has been set.

### GetBeforeProvisioningRule

`func (o *SimIntegrationDetails) GetBeforeProvisioningRule() SimIntegrationDetailsAllOfBeforeProvisioningRule`

GetBeforeProvisioningRule returns the BeforeProvisioningRule field if non-nil, zero value otherwise.

### GetBeforeProvisioningRuleOk

`func (o *SimIntegrationDetails) GetBeforeProvisioningRuleOk() (*SimIntegrationDetailsAllOfBeforeProvisioningRule, bool)`

GetBeforeProvisioningRuleOk returns a tuple with the BeforeProvisioningRule field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBeforeProvisioningRule

`func (o *SimIntegrationDetails) SetBeforeProvisioningRule(v SimIntegrationDetailsAllOfBeforeProvisioningRule)`

SetBeforeProvisioningRule sets BeforeProvisioningRule field to given value.

### HasBeforeProvisioningRule

`func (o *SimIntegrationDetails) HasBeforeProvisioningRule() bool`

HasBeforeProvisioningRule returns a boolean if a field has been set.


