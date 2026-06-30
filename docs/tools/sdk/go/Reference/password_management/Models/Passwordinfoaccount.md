---
id: v1-passwordinfoaccount
title: Passwordinfoaccount
pagination_label: Passwordinfoaccount
sidebar_label: Passwordinfoaccount
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Passwordinfoaccount', 'V1Passwordinfoaccount'] 
slug: /tools/sdk/go/passwordmanagement/models/passwordinfoaccount
tags: ['SDK', 'Software Development Kit', 'Passwordinfoaccount', 'V1Passwordinfoaccount']
---

# Passwordinfoaccount

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountId** | Pointer to **string** | Account ID of the account. This is specified per account schema in the source configuration. It is used to distinguish accounts. More info can be found here https://community.sailpoint.com/t5/IdentityNow-Connectors/How-do-I-designate-an-account-attribute-as-the-Account-ID-for-a/ta-p/80350 | [optional] 
**AccountName** | Pointer to **string** | Display name of the account. This is specified per account schema in the source configuration. It is used to display name of the account. More info can be found here https://community.sailpoint.com/t5/IdentityNow-Connectors/How-do-I-designate-an-account-attribute-as-the-Account-Name-for/ta-p/74008 | [optional] 

## Methods

### NewPasswordinfoaccount

`func NewPasswordinfoaccount() *Passwordinfoaccount`

NewPasswordinfoaccount instantiates a new Passwordinfoaccount object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPasswordinfoaccountWithDefaults

`func NewPasswordinfoaccountWithDefaults() *Passwordinfoaccount`

NewPasswordinfoaccountWithDefaults instantiates a new Passwordinfoaccount object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccountId

`func (o *Passwordinfoaccount) GetAccountId() string`

GetAccountId returns the AccountId field if non-nil, zero value otherwise.

### GetAccountIdOk

`func (o *Passwordinfoaccount) GetAccountIdOk() (*string, bool)`

GetAccountIdOk returns a tuple with the AccountId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountId

`func (o *Passwordinfoaccount) SetAccountId(v string)`

SetAccountId sets AccountId field to given value.

### HasAccountId

`func (o *Passwordinfoaccount) HasAccountId() bool`

HasAccountId returns a boolean if a field has been set.

### GetAccountName

`func (o *Passwordinfoaccount) GetAccountName() string`

GetAccountName returns the AccountName field if non-nil, zero value otherwise.

### GetAccountNameOk

`func (o *Passwordinfoaccount) GetAccountNameOk() (*string, bool)`

GetAccountNameOk returns a tuple with the AccountName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountName

`func (o *Passwordinfoaccount) SetAccountName(v string)`

SetAccountName sets AccountName field to given value.

### HasAccountName

`func (o *Passwordinfoaccount) HasAccountName() bool`

HasAccountName returns a boolean if a field has been set.


