---
id: v1-rolemetadatabulkupdatebyqueryrequest
title: Rolemetadatabulkupdatebyqueryrequest
pagination_label: Rolemetadatabulkupdatebyqueryrequest
sidebar_label: Rolemetadatabulkupdatebyqueryrequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Rolemetadatabulkupdatebyqueryrequest', 'V1Rolemetadatabulkupdatebyqueryrequest'] 
slug: /tools/sdk/go/roles/models/rolemetadatabulkupdatebyqueryrequest
tags: ['SDK', 'Software Development Kit', 'Rolemetadatabulkupdatebyqueryrequest', 'V1Rolemetadatabulkupdatebyqueryrequest']
---

# Rolemetadatabulkupdatebyqueryrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Query** | **map[string]interface{}** | query the identities to be updated | 
**Operation** | **string** | The operation to be performed | 
**ReplaceScope** | Pointer to **string** | The choice of update scope. | [optional] 
**Values** | [**[]RolemetadatabulkupdatebyqueryrequestValuesInner**](rolemetadatabulkupdatebyqueryrequest-values-inner) | The metadata to be updated, including attribute key and value. | 

## Methods

### NewRolemetadatabulkupdatebyqueryrequest

`func NewRolemetadatabulkupdatebyqueryrequest(query map[string]interface{}, operation string, values []RolemetadatabulkupdatebyqueryrequestValuesInner, ) *Rolemetadatabulkupdatebyqueryrequest`

NewRolemetadatabulkupdatebyqueryrequest instantiates a new Rolemetadatabulkupdatebyqueryrequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRolemetadatabulkupdatebyqueryrequestWithDefaults

`func NewRolemetadatabulkupdatebyqueryrequestWithDefaults() *Rolemetadatabulkupdatebyqueryrequest`

NewRolemetadatabulkupdatebyqueryrequestWithDefaults instantiates a new Rolemetadatabulkupdatebyqueryrequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetQuery

`func (o *Rolemetadatabulkupdatebyqueryrequest) GetQuery() map[string]interface{}`

GetQuery returns the Query field if non-nil, zero value otherwise.

### GetQueryOk

`func (o *Rolemetadatabulkupdatebyqueryrequest) GetQueryOk() (*map[string]interface{}, bool)`

GetQueryOk returns a tuple with the Query field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuery

`func (o *Rolemetadatabulkupdatebyqueryrequest) SetQuery(v map[string]interface{})`

SetQuery sets Query field to given value.


### GetOperation

`func (o *Rolemetadatabulkupdatebyqueryrequest) GetOperation() string`

GetOperation returns the Operation field if non-nil, zero value otherwise.

### GetOperationOk

`func (o *Rolemetadatabulkupdatebyqueryrequest) GetOperationOk() (*string, bool)`

GetOperationOk returns a tuple with the Operation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperation

`func (o *Rolemetadatabulkupdatebyqueryrequest) SetOperation(v string)`

SetOperation sets Operation field to given value.


### GetReplaceScope

`func (o *Rolemetadatabulkupdatebyqueryrequest) GetReplaceScope() string`

GetReplaceScope returns the ReplaceScope field if non-nil, zero value otherwise.

### GetReplaceScopeOk

`func (o *Rolemetadatabulkupdatebyqueryrequest) GetReplaceScopeOk() (*string, bool)`

GetReplaceScopeOk returns a tuple with the ReplaceScope field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReplaceScope

`func (o *Rolemetadatabulkupdatebyqueryrequest) SetReplaceScope(v string)`

SetReplaceScope sets ReplaceScope field to given value.

### HasReplaceScope

`func (o *Rolemetadatabulkupdatebyqueryrequest) HasReplaceScope() bool`

HasReplaceScope returns a boolean if a field has been set.

### GetValues

`func (o *Rolemetadatabulkupdatebyqueryrequest) GetValues() []RolemetadatabulkupdatebyqueryrequestValuesInner`

GetValues returns the Values field if non-nil, zero value otherwise.

### GetValuesOk

`func (o *Rolemetadatabulkupdatebyqueryrequest) GetValuesOk() (*[]RolemetadatabulkupdatebyqueryrequestValuesInner, bool)`

GetValuesOk returns a tuple with the Values field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValues

`func (o *Rolemetadatabulkupdatebyqueryrequest) SetValues(v []RolemetadatabulkupdatebyqueryrequestValuesInner)`

SetValues sets Values field to given value.



