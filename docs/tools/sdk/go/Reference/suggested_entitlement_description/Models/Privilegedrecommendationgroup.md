---
id: v1-privilegedrecommendationgroup
title: Privilegedrecommendationgroup
pagination_label: Privilegedrecommendationgroup
sidebar_label: Privilegedrecommendationgroup
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Privilegedrecommendationgroup', 'V1Privilegedrecommendationgroup'] 
slug: /tools/sdk/go/suggestedentitlementdescription/models/privilegedrecommendationgroup
tags: ['SDK', 'Software Development Kit', 'Privilegedrecommendationgroup', 'V1Privilegedrecommendationgroup']
---

# Privilegedrecommendationgroup

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EntitlementName** | Pointer to **string** | The name of the entitlement shared across all instances in this group. | [optional] 
**ConnectorType** | Pointer to **string** | The connector type associated with all instances in this group. | [optional] 
**RecommendationScore** | Pointer to **string** | A decimal string representing the confidence score of the privilege recommendation (0.0-1.0). | [optional] 
**OrgCount** | Pointer to **int32** | The number of organizations in which this entitlement appears as privileged. | [optional] 
**InstanceCount** | Pointer to **int32** | The total number of individual entitlement instances in this group. | [optional] 
**Instances** | Pointer to [**[]Privilegedrecommendationinstance**](privilegedrecommendationinstance) | The individual entitlement instances belonging to this group. | [optional] 

## Methods

### NewPrivilegedrecommendationgroup

`func NewPrivilegedrecommendationgroup() *Privilegedrecommendationgroup`

NewPrivilegedrecommendationgroup instantiates a new Privilegedrecommendationgroup object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPrivilegedrecommendationgroupWithDefaults

`func NewPrivilegedrecommendationgroupWithDefaults() *Privilegedrecommendationgroup`

NewPrivilegedrecommendationgroupWithDefaults instantiates a new Privilegedrecommendationgroup object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEntitlementName

`func (o *Privilegedrecommendationgroup) GetEntitlementName() string`

GetEntitlementName returns the EntitlementName field if non-nil, zero value otherwise.

### GetEntitlementNameOk

`func (o *Privilegedrecommendationgroup) GetEntitlementNameOk() (*string, bool)`

GetEntitlementNameOk returns a tuple with the EntitlementName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntitlementName

`func (o *Privilegedrecommendationgroup) SetEntitlementName(v string)`

SetEntitlementName sets EntitlementName field to given value.

### HasEntitlementName

`func (o *Privilegedrecommendationgroup) HasEntitlementName() bool`

HasEntitlementName returns a boolean if a field has been set.

### GetConnectorType

`func (o *Privilegedrecommendationgroup) GetConnectorType() string`

GetConnectorType returns the ConnectorType field if non-nil, zero value otherwise.

### GetConnectorTypeOk

`func (o *Privilegedrecommendationgroup) GetConnectorTypeOk() (*string, bool)`

GetConnectorTypeOk returns a tuple with the ConnectorType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnectorType

`func (o *Privilegedrecommendationgroup) SetConnectorType(v string)`

SetConnectorType sets ConnectorType field to given value.

### HasConnectorType

`func (o *Privilegedrecommendationgroup) HasConnectorType() bool`

HasConnectorType returns a boolean if a field has been set.

### GetRecommendationScore

`func (o *Privilegedrecommendationgroup) GetRecommendationScore() string`

GetRecommendationScore returns the RecommendationScore field if non-nil, zero value otherwise.

### GetRecommendationScoreOk

`func (o *Privilegedrecommendationgroup) GetRecommendationScoreOk() (*string, bool)`

GetRecommendationScoreOk returns a tuple with the RecommendationScore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecommendationScore

`func (o *Privilegedrecommendationgroup) SetRecommendationScore(v string)`

SetRecommendationScore sets RecommendationScore field to given value.

### HasRecommendationScore

`func (o *Privilegedrecommendationgroup) HasRecommendationScore() bool`

HasRecommendationScore returns a boolean if a field has been set.

### GetOrgCount

`func (o *Privilegedrecommendationgroup) GetOrgCount() int32`

GetOrgCount returns the OrgCount field if non-nil, zero value otherwise.

### GetOrgCountOk

`func (o *Privilegedrecommendationgroup) GetOrgCountOk() (*int32, bool)`

GetOrgCountOk returns a tuple with the OrgCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrgCount

`func (o *Privilegedrecommendationgroup) SetOrgCount(v int32)`

SetOrgCount sets OrgCount field to given value.

### HasOrgCount

`func (o *Privilegedrecommendationgroup) HasOrgCount() bool`

HasOrgCount returns a boolean if a field has been set.

### GetInstanceCount

`func (o *Privilegedrecommendationgroup) GetInstanceCount() int32`

GetInstanceCount returns the InstanceCount field if non-nil, zero value otherwise.

### GetInstanceCountOk

`func (o *Privilegedrecommendationgroup) GetInstanceCountOk() (*int32, bool)`

GetInstanceCountOk returns a tuple with the InstanceCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInstanceCount

`func (o *Privilegedrecommendationgroup) SetInstanceCount(v int32)`

SetInstanceCount sets InstanceCount field to given value.

### HasInstanceCount

`func (o *Privilegedrecommendationgroup) HasInstanceCount() bool`

HasInstanceCount returns a boolean if a field has been set.

### GetInstances

`func (o *Privilegedrecommendationgroup) GetInstances() []Privilegedrecommendationinstance`

GetInstances returns the Instances field if non-nil, zero value otherwise.

### GetInstancesOk

`func (o *Privilegedrecommendationgroup) GetInstancesOk() (*[]Privilegedrecommendationinstance, bool)`

GetInstancesOk returns a tuple with the Instances field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInstances

`func (o *Privilegedrecommendationgroup) SetInstances(v []Privilegedrecommendationinstance)`

SetInstances sets Instances field to given value.

### HasInstances

`func (o *Privilegedrecommendationgroup) HasInstances() bool`

HasInstances returns a boolean if a field has been set.


