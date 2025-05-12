---
id: beta-get-discovered-applications200-response-inner
title: GetDiscoveredApplications200ResponseInner
pagination_label: GetDiscoveredApplications200ResponseInner
sidebar_label: GetDiscoveredApplications200ResponseInner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'GetDiscoveredApplications200ResponseInner', 'BetaGetDiscoveredApplications200ResponseInner'] 
slug: /tools/sdk/go/beta/models/get-discovered-applications200-response-inner
tags: ['SDK', 'Software Development Kit', 'GetDiscoveredApplications200ResponseInner', 'BetaGetDiscoveredApplications200ResponseInner']
---

# GetDiscoveredApplications200ResponseInner

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
**Status** | Pointer to **string** | The status of an application within the discovery source.  By default this field is set to \"ACTIVE\" when the application is discovered.  If an application has been deleted from within the discovery source, the status will be set to \"INACTIVE\". | [optional] 
**AssociatedSources** | Pointer to **[]string** | List of associated sources related to this discovered application. | [optional] 

## Methods

### NewGetDiscoveredApplications200ResponseInner

`func NewGetDiscoveredApplications200ResponseInner() *GetDiscoveredApplications200ResponseInner`

NewGetDiscoveredApplications200ResponseInner instantiates a new GetDiscoveredApplications200ResponseInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetDiscoveredApplications200ResponseInnerWithDefaults

`func NewGetDiscoveredApplications200ResponseInnerWithDefaults() *GetDiscoveredApplications200ResponseInner`

NewGetDiscoveredApplications200ResponseInnerWithDefaults instantiates a new GetDiscoveredApplications200ResponseInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *GetDiscoveredApplications200ResponseInner) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *GetDiscoveredApplications200ResponseInner) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *GetDiscoveredApplications200ResponseInner) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *GetDiscoveredApplications200ResponseInner) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *GetDiscoveredApplications200ResponseInner) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *GetDiscoveredApplications200ResponseInner) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *GetDiscoveredApplications200ResponseInner) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *GetDiscoveredApplications200ResponseInner) HasName() bool`

HasName returns a boolean if a field has been set.

### GetDiscoverySource

`func (o *GetDiscoveredApplications200ResponseInner) GetDiscoverySource() string`

GetDiscoverySource returns the DiscoverySource field if non-nil, zero value otherwise.

### GetDiscoverySourceOk

`func (o *GetDiscoveredApplications200ResponseInner) GetDiscoverySourceOk() (*string, bool)`

GetDiscoverySourceOk returns a tuple with the DiscoverySource field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDiscoverySource

`func (o *GetDiscoveredApplications200ResponseInner) SetDiscoverySource(v string)`

SetDiscoverySource sets DiscoverySource field to given value.

### HasDiscoverySource

`func (o *GetDiscoveredApplications200ResponseInner) HasDiscoverySource() bool`

HasDiscoverySource returns a boolean if a field has been set.

### GetDiscoveredVendor

`func (o *GetDiscoveredApplications200ResponseInner) GetDiscoveredVendor() string`

GetDiscoveredVendor returns the DiscoveredVendor field if non-nil, zero value otherwise.

### GetDiscoveredVendorOk

`func (o *GetDiscoveredApplications200ResponseInner) GetDiscoveredVendorOk() (*string, bool)`

GetDiscoveredVendorOk returns a tuple with the DiscoveredVendor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDiscoveredVendor

`func (o *GetDiscoveredApplications200ResponseInner) SetDiscoveredVendor(v string)`

SetDiscoveredVendor sets DiscoveredVendor field to given value.

### HasDiscoveredVendor

`func (o *GetDiscoveredApplications200ResponseInner) HasDiscoveredVendor() bool`

HasDiscoveredVendor returns a boolean if a field has been set.

### GetDescription

`func (o *GetDiscoveredApplications200ResponseInner) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *GetDiscoveredApplications200ResponseInner) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *GetDiscoveredApplications200ResponseInner) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *GetDiscoveredApplications200ResponseInner) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetRecommendedConnectors

`func (o *GetDiscoveredApplications200ResponseInner) GetRecommendedConnectors() []string`

GetRecommendedConnectors returns the RecommendedConnectors field if non-nil, zero value otherwise.

### GetRecommendedConnectorsOk

`func (o *GetDiscoveredApplications200ResponseInner) GetRecommendedConnectorsOk() (*[]string, bool)`

GetRecommendedConnectorsOk returns a tuple with the RecommendedConnectors field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecommendedConnectors

`func (o *GetDiscoveredApplications200ResponseInner) SetRecommendedConnectors(v []string)`

SetRecommendedConnectors sets RecommendedConnectors field to given value.

### HasRecommendedConnectors

`func (o *GetDiscoveredApplications200ResponseInner) HasRecommendedConnectors() bool`

HasRecommendedConnectors returns a boolean if a field has been set.

### GetDiscoveredAt

`func (o *GetDiscoveredApplications200ResponseInner) GetDiscoveredAt() time.Time`

GetDiscoveredAt returns the DiscoveredAt field if non-nil, zero value otherwise.

### GetDiscoveredAtOk

`func (o *GetDiscoveredApplications200ResponseInner) GetDiscoveredAtOk() (*time.Time, bool)`

GetDiscoveredAtOk returns a tuple with the DiscoveredAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDiscoveredAt

`func (o *GetDiscoveredApplications200ResponseInner) SetDiscoveredAt(v time.Time)`

SetDiscoveredAt sets DiscoveredAt field to given value.

### HasDiscoveredAt

`func (o *GetDiscoveredApplications200ResponseInner) HasDiscoveredAt() bool`

HasDiscoveredAt returns a boolean if a field has been set.

### GetCreatedAt

`func (o *GetDiscoveredApplications200ResponseInner) GetCreatedAt() time.Time`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *GetDiscoveredApplications200ResponseInner) GetCreatedAtOk() (*time.Time, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *GetDiscoveredApplications200ResponseInner) SetCreatedAt(v time.Time)`

SetCreatedAt sets CreatedAt field to given value.

### HasCreatedAt

`func (o *GetDiscoveredApplications200ResponseInner) HasCreatedAt() bool`

HasCreatedAt returns a boolean if a field has been set.

### GetStatus

`func (o *GetDiscoveredApplications200ResponseInner) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *GetDiscoveredApplications200ResponseInner) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *GetDiscoveredApplications200ResponseInner) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *GetDiscoveredApplications200ResponseInner) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetAssociatedSources

`func (o *GetDiscoveredApplications200ResponseInner) GetAssociatedSources() []string`

GetAssociatedSources returns the AssociatedSources field if non-nil, zero value otherwise.

### GetAssociatedSourcesOk

`func (o *GetDiscoveredApplications200ResponseInner) GetAssociatedSourcesOk() (*[]string, bool)`

GetAssociatedSourcesOk returns a tuple with the AssociatedSources field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssociatedSources

`func (o *GetDiscoveredApplications200ResponseInner) SetAssociatedSources(v []string)`

SetAssociatedSources sets AssociatedSources field to given value.

### HasAssociatedSources

`func (o *GetDiscoveredApplications200ResponseInner) HasAssociatedSources() bool`

HasAssociatedSources returns a boolean if a field has been set.


