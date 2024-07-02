---
id: accounts-export-report-arguments
title: AccountsExportReportArguments
pagination_label: AccountsExportReportArguments
sidebar_label: AccountsExportReportArguments
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'AccountsExportReportArguments'] 
slug: /tools/sdk/go/v3/models/accounts-export-report-arguments
tags: ['SDK', 'Software Development Kit', 'AccountsExportReportArguments']
---

# AccountsExportReportArguments

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Application** |  **string** | Id of the authoritative source to export related accounts e.g. identities | 
**SourceName** |  **string** | Name of the authoritative source for accounts export | 
**DefaultS3Bucket** |  **bool** | Use it to set default s3 bucket where generated report will be saved.  In case this argument is false and &#39;s3Bucket&#39; argument is null or absent there will be default s3Bucket assigned to the report. | 
**S3Bucket** |  Pointer to **string** | If you want to be specific you could use this argument with defaultS3Bucket &#x3D; false. | [optional] 

## Methods

### NewAccountsExportReportArguments

`func NewAccountsExportReportArguments(application string, sourceName string, defaultS3Bucket bool, ) *AccountsExportReportArguments`

NewAccountsExportReportArguments instantiates a new AccountsExportReportArguments object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountsExportReportArgumentsWithDefaults

`func NewAccountsExportReportArgumentsWithDefaults() *AccountsExportReportArguments`

NewAccountsExportReportArgumentsWithDefaults instantiates a new AccountsExportReportArguments object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetApplication

`func (o *AccountsExportReportArguments) GetApplication() string`

GetApplication returns the Application field if non-nil, zero value otherwise.

### GetApplicationOk

`func (o *AccountsExportReportArguments) GetApplicationOk() (*string, bool)`

GetApplicationOk returns a tuple with the Application field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApplication

`func (o *AccountsExportReportArguments) SetApplication(v string)`

SetApplication sets Application field to given value.


### GetSourceName

`func (o *AccountsExportReportArguments) GetSourceName() string`

GetSourceName returns the SourceName field if non-nil, zero value otherwise.

### GetSourceNameOk

`func (o *AccountsExportReportArguments) GetSourceNameOk() (*string, bool)`

GetSourceNameOk returns a tuple with the SourceName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceName

`func (o *AccountsExportReportArguments) SetSourceName(v string)`

SetSourceName sets SourceName field to given value.


### GetDefaultS3Bucket

`func (o *AccountsExportReportArguments) GetDefaultS3Bucket() bool`

GetDefaultS3Bucket returns the DefaultS3Bucket field if non-nil, zero value otherwise.

### GetDefaultS3BucketOk

`func (o *AccountsExportReportArguments) GetDefaultS3BucketOk() (*bool, bool)`

GetDefaultS3BucketOk returns a tuple with the DefaultS3Bucket field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefaultS3Bucket

`func (o *AccountsExportReportArguments) SetDefaultS3Bucket(v bool)`

SetDefaultS3Bucket sets DefaultS3Bucket field to given value.


### GetS3Bucket

`func (o *AccountsExportReportArguments) GetS3Bucket() string`

GetS3Bucket returns the S3Bucket field if non-nil, zero value otherwise.

### GetS3BucketOk

`func (o *AccountsExportReportArguments) GetS3BucketOk() (*string, bool)`

GetS3BucketOk returns a tuple with the S3Bucket field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetS3Bucket

`func (o *AccountsExportReportArguments) SetS3Bucket(v string)`

SetS3Bucket sets S3Bucket field to given value.

### HasS3Bucket

`func (o *AccountsExportReportArguments) HasS3Bucket() bool`

HasS3Bucket returns a boolean if a field has been set.


[[Back to top]](#) 


