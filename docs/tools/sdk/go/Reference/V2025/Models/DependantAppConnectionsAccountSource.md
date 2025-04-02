---
id: dependant-app-connections-account-source
title: DependantAppConnectionsAccountSource
pagination_label: DependantAppConnectionsAccountSource
sidebar_label: DependantAppConnectionsAccountSource
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'DependantAppConnectionsAccountSource', 'DependantAppConnectionsAccountSource'] 
slug: /tools/sdk/go//models/dependant-app-connections-account-source
tags: ['SDK', 'Software Development Kit', 'DependantAppConnectionsAccountSource', 'DependantAppConnectionsAccountSource']
---

# DependantAppConnectionsAccountSource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**UseForPasswordManagement** | Pointer to **bool** | Use this Account Source for password management | [optional] [default to false]
**PasswordPolicies** | Pointer to [**[]DependantAppConnectionsAccountSourcePasswordPoliciesInner**](dependant-app-connections-account-source-password-policies-inner) | A list of Password Policies for this Account Source | [optional] 

## Methods

### NewDependantAppConnectionsAccountSource

`func NewDependantAppConnectionsAccountSource() *DependantAppConnectionsAccountSource`

NewDependantAppConnectionsAccountSource instantiates a new DependantAppConnectionsAccountSource object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDependantAppConnectionsAccountSourceWithDefaults

`func NewDependantAppConnectionsAccountSourceWithDefaults() *DependantAppConnectionsAccountSource`

NewDependantAppConnectionsAccountSourceWithDefaults instantiates a new DependantAppConnectionsAccountSource object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUseForPasswordManagement

`func (o *DependantAppConnectionsAccountSource) GetUseForPasswordManagement() bool`

GetUseForPasswordManagement returns the UseForPasswordManagement field if non-nil, zero value otherwise.

### GetUseForPasswordManagementOk

`func (o *DependantAppConnectionsAccountSource) GetUseForPasswordManagementOk() (*bool, bool)`

GetUseForPasswordManagementOk returns a tuple with the UseForPasswordManagement field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUseForPasswordManagement

`func (o *DependantAppConnectionsAccountSource) SetUseForPasswordManagement(v bool)`

SetUseForPasswordManagement sets UseForPasswordManagement field to given value.

### HasUseForPasswordManagement

`func (o *DependantAppConnectionsAccountSource) HasUseForPasswordManagement() bool`

HasUseForPasswordManagement returns a boolean if a field has been set.

### GetPasswordPolicies

`func (o *DependantAppConnectionsAccountSource) GetPasswordPolicies() []DependantAppConnectionsAccountSourcePasswordPoliciesInner`

GetPasswordPolicies returns the PasswordPolicies field if non-nil, zero value otherwise.

### GetPasswordPoliciesOk

`func (o *DependantAppConnectionsAccountSource) GetPasswordPoliciesOk() (*[]DependantAppConnectionsAccountSourcePasswordPoliciesInner, bool)`

GetPasswordPoliciesOk returns a tuple with the PasswordPolicies field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPasswordPolicies

`func (o *DependantAppConnectionsAccountSource) SetPasswordPolicies(v []DependantAppConnectionsAccountSourcePasswordPoliciesInner)`

SetPasswordPolicies sets PasswordPolicies field to given value.

### HasPasswordPolicies

`func (o *DependantAppConnectionsAccountSource) HasPasswordPolicies() bool`

HasPasswordPolicies returns a boolean if a field has been set.


