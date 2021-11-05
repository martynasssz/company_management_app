<template>
   <div>
        <div class="card">
   

    <!--main data table board start-->   

            <DataTable :value="companies" v-model:selection="selectedProducts" >

                <!--manage products and search  start-->   
                <template #header>
                    <div class="table-header p-d-flex p-flex-column p-flex-md-row p-jc-md-between">
						<h5 class="p-mb-2 p-m-md-0 p-as-md-center">Companies</h5>						
					</div>
                </template>
                <!--manage products and search  finish-->  

                <!-- hearder of board start -->
                
                <Column selectionMode="multiple" style="width: 3rem" :exportable="false"></Column>
                <Column field="name" header="Company name" :sortable="true" style="min-width:12rem"></Column>
                <Column field="email" header="Email" :sortable="true" style="min-width:16rem"></Column>  
                <Column field="contact_count" header="Contact Count" :sortable="true" style="min-width:16rem"></Column>               
                
                
                <Column :exportable="false" style="min-width:8rem">
                    <template #body="slotProps">
                        <Button icon="pi pi-pencil" class="p-button-rounded p-button-success p-mr-2" @click="editProduct(slotProps.data)" />
                        <Button icon="pi pi-trash" class="p-button-rounded p-button-warning" @click="confirmDeleteProduct(slotProps.data)" />
                    </template>
                </Column>
            </DataTable>
        </div>
        <!-- hearder of board finish -->       
        
	</div>  
</template>

<script>
import useCompanies from "../composables/companies"; 
import { onMounted } from "vue";
export default {
   setup() {
        const {companies, getCompanies} = useCompanies() //thing that we need from useCompanies

       onMounted(getCompanies); //call automaticaly fum getCompanies from composable

       return {
           companies 
        }
    }
}
</script>

<style scoped>

</style>