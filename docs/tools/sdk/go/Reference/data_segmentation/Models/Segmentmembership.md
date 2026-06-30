---
id: v1-segmentmembership
title: Segmentmembership
pagination_label: Segmentmembership
sidebar_label: Segmentmembership
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Segmentmembership', 'V1Segmentmembership'] 
slug: /tools/sdk/go/datasegmentation/models/segmentmembership
tags: ['SDK', 'Software Development Kit', 'Segmentmembership', 'V1Segmentmembership']
---

# Segmentmembership

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Segments** | Pointer to **[]string** | List of segment ids that the identity is associated with. | [optional] 
**AllAccessScopes** | Pointer to [**[]Scopetype**](scopetype) | They type of scopes that are assigned to the identity. | [optional] 
**RefreshBy** | Pointer to **SailPointTime** | Date time string that lets you know when the membership data is going to be refreshed. | [optional] 

## Methods

### NewSegmentmembership

`func NewSegmentmembership() *Segmentmembership`

NewSegmentmembership instantiates a new Segmentmembership object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSegmentmembershipWithDefaults

`func NewSegmentmembershipWithDefaults() *Segmentmembership`

NewSegmentmembershipWithDefaults instantiates a new Segmentmembership object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSegments

`func (o *Segmentmembership) GetSegments() []string`

GetSegments returns the Segments field if non-nil, zero value otherwise.

### GetSegmentsOk

`func (o *Segmentmembership) GetSegmentsOk() (*[]string, bool)`

GetSegmentsOk returns a tuple with the Segments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSegments

`func (o *Segmentmembership) SetSegments(v []string)`

SetSegments sets Segments field to given value.

### HasSegments

`func (o *Segmentmembership) HasSegments() bool`

HasSegments returns a boolean if a field has been set.

### GetAllAccessScopes

`func (o *Segmentmembership) GetAllAccessScopes() []Scopetype`

GetAllAccessScopes returns the AllAccessScopes field if non-nil, zero value otherwise.

### GetAllAccessScopesOk

`func (o *Segmentmembership) GetAllAccessScopesOk() (*[]Scopetype, bool)`

GetAllAccessScopesOk returns a tuple with the AllAccessScopes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllAccessScopes

`func (o *Segmentmembership) SetAllAccessScopes(v []Scopetype)`

SetAllAccessScopes sets AllAccessScopes field to given value.

### HasAllAccessScopes

`func (o *Segmentmembership) HasAllAccessScopes() bool`

HasAllAccessScopes returns a boolean if a field has been set.

### GetRefreshBy

`func (o *Segmentmembership) GetRefreshBy() SailPointTime`

GetRefreshBy returns the RefreshBy field if non-nil, zero value otherwise.

### GetRefreshByOk

`func (o *Segmentmembership) GetRefreshByOk() (*SailPointTime, bool)`

GetRefreshByOk returns a tuple with the RefreshBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRefreshBy

`func (o *Segmentmembership) SetRefreshBy(v SailPointTime)`

SetRefreshBy sets RefreshBy field to given value.

### HasRefreshBy

`func (o *Segmentmembership) HasRefreshBy() bool`

HasRefreshBy returns a boolean if a field has been set.


