---
id: v1-commonaccessidstatus
title: Commonaccessidstatus
pagination_label: Commonaccessidstatus
sidebar_label: Commonaccessidstatus
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Commonaccessidstatus', 'V1Commonaccessidstatus'] 
slug: /tools/sdk/go/iaicommonaccess/models/commonaccessidstatus
tags: ['SDK', 'Software Development Kit', 'Commonaccessidstatus', 'V1Commonaccessidstatus']
---

# Commonaccessidstatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ConfirmedIds** | Pointer to **[]string** | List of confirmed common access ids. | [optional] 
**DeniedIds** | Pointer to **[]string** | List of denied common access ids. | [optional] 

## Methods

### NewCommonaccessidstatus

`func NewCommonaccessidstatus() *Commonaccessidstatus`

NewCommonaccessidstatus instantiates a new Commonaccessidstatus object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCommonaccessidstatusWithDefaults

`func NewCommonaccessidstatusWithDefaults() *Commonaccessidstatus`

NewCommonaccessidstatusWithDefaults instantiates a new Commonaccessidstatus object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetConfirmedIds

`func (o *Commonaccessidstatus) GetConfirmedIds() []string`

GetConfirmedIds returns the ConfirmedIds field if non-nil, zero value otherwise.

### GetConfirmedIdsOk

`func (o *Commonaccessidstatus) GetConfirmedIdsOk() (*[]string, bool)`

GetConfirmedIdsOk returns a tuple with the ConfirmedIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfirmedIds

`func (o *Commonaccessidstatus) SetConfirmedIds(v []string)`

SetConfirmedIds sets ConfirmedIds field to given value.

### HasConfirmedIds

`func (o *Commonaccessidstatus) HasConfirmedIds() bool`

HasConfirmedIds returns a boolean if a field has been set.

### GetDeniedIds

`func (o *Commonaccessidstatus) GetDeniedIds() []string`

GetDeniedIds returns the DeniedIds field if non-nil, zero value otherwise.

### GetDeniedIdsOk

`func (o *Commonaccessidstatus) GetDeniedIdsOk() (*[]string, bool)`

GetDeniedIdsOk returns a tuple with the DeniedIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeniedIds

`func (o *Commonaccessidstatus) SetDeniedIds(v []string)`

SetDeniedIds sets DeniedIds field to given value.

### HasDeniedIds

`func (o *Commonaccessidstatus) HasDeniedIds() bool`

HasDeniedIds returns a boolean if a field has been set.


