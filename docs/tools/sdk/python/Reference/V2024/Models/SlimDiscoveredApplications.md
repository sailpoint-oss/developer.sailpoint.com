---
id: v2024-slim-discovered-applications
title: SlimDiscoveredApplications
pagination_label: SlimDiscoveredApplications
sidebar_label: SlimDiscoveredApplications
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SlimDiscoveredApplications', 'V2024SlimDiscoveredApplications'] 
slug: /tools/sdk/go/v2024/models/slim-discovered-applications
tags: ['SDK', 'Software Development Kit', 'SlimDiscoveredApplications', 'V2024SlimDiscoveredApplications']
---

# SlimDiscoveredApplications

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Unique identifier for the discovered application. | [optional] 
**Name** | Pointer to **string** | Name of the discovered application. | [optional] 
**DiscoverySource** | Pointer to **string** | Source from which the application was discovered. | [optional] 
**DiscoveredVendor** | Pointer to **string** | The vendor associated with the discovered application. | [optional] 
**Description** | Pointer to **string** | A brief description of the discovered application. | [optional] 
**RecommendedConnectors** | Pointer to **[]string** | List of recommended connectors for the application. | [optional] 
**DiscoveredAt** | Pointer to **SailPointTime** | The timestamp when the application was last received via an entitlement aggregation invocation  or a manual csv upload, in ISO 8601 format. | [optional] 
**CreatedAt** | Pointer to **SailPointTime** | The timestamp when the application was first discovered, in ISO 8601 format. | [optional] 
**Status** | Pointer to **string** | The status of an application within the discovery source.  By default this field is set to \"ACTIVE\" when the application is discovered.  If an application has been deleted from within the discovery source, the status will be set to \"INACTIVE\". | [optional] 

## Methods

### NewSlimDiscoveredApplications

`func NewSlimDiscoveredApplications() *SlimDiscoveredApplications`

NewSlimDiscoveredApplications instantiates a new SlimDiscoveredApplications object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSlimDiscoveredApplicationsWithDefaults

`func NewSlimDiscoveredApplicationsWithDefaults() *SlimDiscoveredApplications`

NewSlimDiscoveredApplicationsWithDefaults instantiates a new SlimDiscoveredApplications object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *SlimDiscoveredApplications) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *SlimDiscoveredApplications) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *SlimDiscoveredApplications) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *SlimDiscoveredApplications) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *SlimDiscoveredApplications) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *SlimDiscoveredApplications) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *SlimDiscoveredApplications) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *SlimDiscoveredApplications) HasName() bool`

HasName returns a boolean if a field has been set.

### GetDiscoverySource

`func (o *SlimDiscoveredApplications) GetDiscoverySource() string`

GetDiscoverySource returns the DiscoverySource field if non-nil, zero value otherwise.

### GetDiscoverySourceOk

`func (o *SlimDiscoveredApplications) GetDiscoverySourceOk() (*string, bool)`

GetDiscoverySourceOk returns a tuple with the DiscoverySource field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDiscoverySource

`func (o *SlimDiscoveredApplications) SetDiscoverySource(v string)`

SetDiscoverySource sets DiscoverySource field to given value.

### HasDiscoverySource

`func (o *SlimDiscoveredApplications) HasDiscoverySource() bool`

HasDiscoverySource returns a boolean if a field has been set.

### GetDiscoveredVendor

`func (o *SlimDiscoveredApplications) GetDiscoveredVendor() string`

GetDiscoveredVendor returns the DiscoveredVendor field if non-nil, zero value otherwise.

### GetDiscoveredVendorOk

`func (o *SlimDiscoveredApplications) GetDiscoveredVendorOk() (*string, bool)`

GetDiscoveredVendorOk returns a tuple with the DiscoveredVendor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDiscoveredVendor

`func (o *SlimDiscoveredApplications) SetDiscoveredVendor(v string)`

SetDiscoveredVendor sets DiscoveredVendor field to given value.

### HasDiscoveredVendor

`func (o *SlimDiscoveredApplications) HasDiscoveredVendor() bool`

HasDiscoveredVendor returns a boolean if a field has been set.

### GetDescription

`func (o *SlimDiscoveredApplications) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *SlimDiscoveredApplications) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *SlimDiscoveredApplications) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *SlimDiscoveredApplications) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetRecommendedConnectors

`func (o *SlimDiscoveredApplications) GetRecommendedConnectors() []string`

GetRecommendedConnectors returns the RecommendedConnectors field if non-nil, zero value otherwise.

### GetRecommendedConnectorsOk

`func (o *SlimDiscoveredApplications) GetRecommendedConnectorsOk() (*[]string, bool)`

GetRecommendedConnectorsOk returns a tuple with the RecommendedConnectors field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecommendedConnectors

`func (o *SlimDiscoveredApplications) SetRecommendedConnectors(v []string)`

SetRecommendedConnectors sets RecommendedConnectors field to given value.

### HasRecommendedConnectors

`func (o *SlimDiscoveredApplications) HasRecommendedConnectors() bool`

HasRecommendedConnectors returns a boolean if a field has been set.

### GetDiscoveredAt

`func (o *SlimDiscoveredApplications) GetDiscoveredAt() SailPointTime`

GetDiscoveredAt returns the DiscoveredAt field if non-nil, zero value otherwise.

### GetDiscoveredAtOk

`func (o *SlimDiscoveredApplications) GetDiscoveredAtOk() (*SailPointTime, bool)`

GetDiscoveredAtOk returns a tuple with the DiscoveredAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDiscoveredAt

`func (o *SlimDiscoveredApplications) SetDiscoveredAt(v SailPointTime)`

SetDiscoveredAt sets DiscoveredAt field to given value.

### HasDiscoveredAt

`func (o *SlimDiscoveredApplications) HasDiscoveredAt() bool`

HasDiscoveredAt returns a boolean if a field has been set.

### GetCreatedAt

`func (o *SlimDiscoveredApplications) GetCreatedAt() SailPointTime`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *SlimDiscoveredApplications) GetCreatedAtOk() (*SailPointTime, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *SlimDiscoveredApplications) SetCreatedAt(v SailPointTime)`

SetCreatedAt sets CreatedAt field to given value.

### HasCreatedAt

`func (o *SlimDiscoveredApplications) HasCreatedAt() bool`

HasCreatedAt returns a boolean if a field has been set.

### GetStatus

`func (o *SlimDiscoveredApplications) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *SlimDiscoveredApplications) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *SlimDiscoveredApplications) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *SlimDiscoveredApplications) HasStatus() bool`

HasStatus returns a boolean if a field has been set.


