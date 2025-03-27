---
id: full-discovered-applications
title: FullDiscoveredApplications
pagination_label: FullDiscoveredApplications
sidebar_label: FullDiscoveredApplications
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'FullDiscoveredApplications', 'FullDiscoveredApplications'] 
slug: /tools/sdk/go/v3/models/full-discovered-applications
tags: ['SDK', 'Software Development Kit', 'FullDiscoveredApplications', 'FullDiscoveredApplications']
---

# FullDiscoveredApplications

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Unique identifier for the discovered application. | [optional] 
**Name** | Pointer to **string** | Name of the discovered application. | [optional] 
**DiscoverySource** | Pointer to **string** | Source from which the application was discovered. | [optional] 
**DiscoveredVendor** | Pointer to **string** | The vendor associated with the discovered application. | [optional] 
**Description** | Pointer to **string** | A brief description of the discovered application. | [optional] 
**RecommendedConnectors** | Pointer to **[]string** | List of recommended connectors for the application. | [optional] 
**DiscoveredAt** | Pointer to **time.Time** | The timestamp when the application was last received via an entitlement aggregation invocation  or a manual csv upload, in ISO 8601 format. | [optional] 
**CreatedAt** | Pointer to **time.Time** | The timestamp when the application was first discovered, in ISO 8601 format. | [optional] 
**Status** | Pointer to **string** | The status of an application within the discovery source.  By default this field is set to \&quot;ACTIVE\&quot; when the application is discovered.  If an application has been deleted from within the discovery source, the status will be set to \&quot;INACTIVE\&quot;. | [optional] 
**AssociatedSources** | Pointer to **[]string** | List of associated sources related to this discovered application. | [optional] 

## Methods

### NewFullDiscoveredApplications

`func NewFullDiscoveredApplications() *FullDiscoveredApplications`

NewFullDiscoveredApplications instantiates a new FullDiscoveredApplications object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFullDiscoveredApplicationsWithDefaults

`func NewFullDiscoveredApplicationsWithDefaults() *FullDiscoveredApplications`

NewFullDiscoveredApplicationsWithDefaults instantiates a new FullDiscoveredApplications object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *FullDiscoveredApplications) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *FullDiscoveredApplications) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *FullDiscoveredApplications) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *FullDiscoveredApplications) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *FullDiscoveredApplications) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *FullDiscoveredApplications) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *FullDiscoveredApplications) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *FullDiscoveredApplications) HasName() bool`

HasName returns a boolean if a field has been set.

### GetDiscoverySource

`func (o *FullDiscoveredApplications) GetDiscoverySource() string`

GetDiscoverySource returns the DiscoverySource field if non-nil, zero value otherwise.

### GetDiscoverySourceOk

`func (o *FullDiscoveredApplications) GetDiscoverySourceOk() (*string, bool)`

GetDiscoverySourceOk returns a tuple with the DiscoverySource field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDiscoverySource

`func (o *FullDiscoveredApplications) SetDiscoverySource(v string)`

SetDiscoverySource sets DiscoverySource field to given value.

### HasDiscoverySource

`func (o *FullDiscoveredApplications) HasDiscoverySource() bool`

HasDiscoverySource returns a boolean if a field has been set.

### GetDiscoveredVendor

`func (o *FullDiscoveredApplications) GetDiscoveredVendor() string`

GetDiscoveredVendor returns the DiscoveredVendor field if non-nil, zero value otherwise.

### GetDiscoveredVendorOk

`func (o *FullDiscoveredApplications) GetDiscoveredVendorOk() (*string, bool)`

GetDiscoveredVendorOk returns a tuple with the DiscoveredVendor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDiscoveredVendor

`func (o *FullDiscoveredApplications) SetDiscoveredVendor(v string)`

SetDiscoveredVendor sets DiscoveredVendor field to given value.

### HasDiscoveredVendor

`func (o *FullDiscoveredApplications) HasDiscoveredVendor() bool`

HasDiscoveredVendor returns a boolean if a field has been set.

### GetDescription

`func (o *FullDiscoveredApplications) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *FullDiscoveredApplications) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *FullDiscoveredApplications) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *FullDiscoveredApplications) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetRecommendedConnectors

`func (o *FullDiscoveredApplications) GetRecommendedConnectors() []string`

GetRecommendedConnectors returns the RecommendedConnectors field if non-nil, zero value otherwise.

### GetRecommendedConnectorsOk

`func (o *FullDiscoveredApplications) GetRecommendedConnectorsOk() (*[]string, bool)`

GetRecommendedConnectorsOk returns a tuple with the RecommendedConnectors field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecommendedConnectors

`func (o *FullDiscoveredApplications) SetRecommendedConnectors(v []string)`

SetRecommendedConnectors sets RecommendedConnectors field to given value.

### HasRecommendedConnectors

`func (o *FullDiscoveredApplications) HasRecommendedConnectors() bool`

HasRecommendedConnectors returns a boolean if a field has been set.

### GetDiscoveredAt

`func (o *FullDiscoveredApplications) GetDiscoveredAt() time.Time`

GetDiscoveredAt returns the DiscoveredAt field if non-nil, zero value otherwise.

### GetDiscoveredAtOk

`func (o *FullDiscoveredApplications) GetDiscoveredAtOk() (*time.Time, bool)`

GetDiscoveredAtOk returns a tuple with the DiscoveredAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDiscoveredAt

`func (o *FullDiscoveredApplications) SetDiscoveredAt(v time.Time)`

SetDiscoveredAt sets DiscoveredAt field to given value.

### HasDiscoveredAt

`func (o *FullDiscoveredApplications) HasDiscoveredAt() bool`

HasDiscoveredAt returns a boolean if a field has been set.

### GetCreatedAt

`func (o *FullDiscoveredApplications) GetCreatedAt() time.Time`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *FullDiscoveredApplications) GetCreatedAtOk() (*time.Time, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *FullDiscoveredApplications) SetCreatedAt(v time.Time)`

SetCreatedAt sets CreatedAt field to given value.

### HasCreatedAt

`func (o *FullDiscoveredApplications) HasCreatedAt() bool`

HasCreatedAt returns a boolean if a field has been set.

### GetStatus

`func (o *FullDiscoveredApplications) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *FullDiscoveredApplications) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *FullDiscoveredApplications) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *FullDiscoveredApplications) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetAssociatedSources

`func (o *FullDiscoveredApplications) GetAssociatedSources() []string`

GetAssociatedSources returns the AssociatedSources field if non-nil, zero value otherwise.

### GetAssociatedSourcesOk

`func (o *FullDiscoveredApplications) GetAssociatedSourcesOk() (*[]string, bool)`

GetAssociatedSourcesOk returns a tuple with the AssociatedSources field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssociatedSources

`func (o *FullDiscoveredApplications) SetAssociatedSources(v []string)`

SetAssociatedSources sets AssociatedSources field to given value.

### HasAssociatedSources

`func (o *FullDiscoveredApplications) HasAssociatedSources() bool`

HasAssociatedSources returns a boolean if a field has been set.


