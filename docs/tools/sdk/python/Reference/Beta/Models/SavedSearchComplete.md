---
id: beta-saved-search-complete
title: SavedSearchComplete
pagination_label: SavedSearchComplete
sidebar_label: SavedSearchComplete
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SavedSearchComplete', 'BetaSavedSearchComplete'] 
slug: /tools/sdk/python/beta/models/saved-search-complete
tags: ['SDK', 'Software Development Kit', 'SavedSearchComplete', 'BetaSavedSearchComplete']
---

# SavedSearchComplete


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_name** | **str** | Report file name. | [required]
**owner_email** | **str** | Email address of the identity who owns the saved search. | [required]
**owner_name** | **str** | Name of the identity who owns the saved search. | [required]
**query** | **str** | Search query used to generate the report. | [required]
**search_name** | **str** | Saved search name. | [required]
**search_results** | [**SavedSearchCompleteSearchResults**](saved-search-complete-search-results) |  | [required]
**signed_s3_url** | **str** | The Amazon S3 URL to download the report from. | [required]
}

## Example

```python
from sailpoint.beta.models.saved_search_complete import SavedSearchComplete

saved_search_complete = SavedSearchComplete(
file_name='Modified.zip',
owner_email='test@sailpoint.com',
owner_name='Cloud Support',
query='modified:[now-7y/d TO now]',
search_name='Modified Activity',
search_results=sailpoint.beta.models.saved_search_complete_search_results.SavedSearchComplete_searchResults(
                    account = sailpoint.beta.models.saved_search_complete_search_results_account.SavedSearchComplete_searchResults_Account(
                        count = '3', 
                        noun = 'accounts', 
                        preview = [
                            []
                            ], ), 
                    entitlement = sailpoint.beta.models.saved_search_complete_search_results_entitlement.SavedSearchComplete_searchResults_Entitlement(
                        count = '2', 
                        noun = 'entitlements', 
                        preview = [
                            []
                            ], ), 
                    identity = sailpoint.beta.models.saved_search_complete_search_results_identity.SavedSearchComplete_searchResults_Identity(
                        count = '2', 
                        noun = 'identities', 
                        preview = [
                            []
                            ], ), ),
signed_s3_url='https://sptcbu-org-data-useast1.s3.amazonaws.com/arsenal-john/reports/Events%20Export.2020-05-06%2018%2759%20GMT.3e580592-86e4-4953-8aea-49e6ef20a086.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20200506T185919Z&X-Amz-SignedHeaders=host&X-Amz-Expires=899&X-Amz-Credential=AKIAV5E54XOGTS4Q4L7A%2F20200506%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=2e732bb97a12a1fd8a215613e3c31fcdae8ba1fb6a25916843ab5b51d2ddefbc'
)

```
[[Back to top]](#) 

