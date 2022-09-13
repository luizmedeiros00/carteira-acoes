<template>
  <div class="my-2 py-2 overflow-x-auto sm:-mx-4 sm:px-4 lg:-mx-4 lg:px-4">
    <div class="align-middle inline-block min-w-full overflow-hidden">
      <table class="min-w-full">
        <thead>
          <tr>
            <th
              class="px-6 py-3 border-b border-gray-400 text-left text-sm leading-4 font-medium text-gray-500 tracking-wider"
              v-for="(header, index) in headers"
              :key="index"
            >
              <div
                class="flex items-center th-cell"
                :class="{
                  'cursor-pointer': header.sortable,
                }"
                @click="toggleSort(header)"
              >
                {{ header.text }}
                <div v-if="header.sortable" class="flex flex-col ml-1">
                  <vue-feather
                    type="chevron-up"
                    class="w-3 h-3 -mb-1"
                    :class="{
                      'text-blue-600': state.ascending && state.sortColumn === header.text,
                    }"
                    :stroke-width="state.ascending && state.sortColumn === header.text ? 5 : 3"
                  ></vue-feather>
                  <vue-feather
                    type="chevron-down"
                    class="w-3 h-3"
                    :class="{
                      'text-blue-600': !state.ascending && state.sortColumn === header.text,
                    }"
                    :stroke-width="!state.ascending && state.sortColumn === header.text ? 5 : 3"
                  ></vue-feather>
                </div>
              </div>
            </th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200">
          <tr class="hover:bg-gray-300" v-for="(item, index) in state.tableItems" :key="index">
            <td
              class="px-6 py-3 text-sm whitespace-no-wrap text-gray-700 td-cell"
              v-for="(header, index) in headers"
              :key="index"
            >
              <slot :name="'item-' + header.value" :item="item">
                {{ headerRender(item, header.value) }}
              </slot>
            </td>
          </tr>
        </tbody>
      </table>
      <div
        v-if="state.tableItems.length === 0 && !loading"
        class="flex flex-row justify-center w-full mt-1"
      >
        <p class="text-sm text-gray-500">Nenhum dado encontrado</p>
      </div>
      <LoadingBar v-if="loading" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import _ from 'lodash'
  import { reactive, watch } from 'vue'
  import LoadingBar from '../LoadingBar/index.vue'
  interface Header {
    text: string
    value: string
    sortable?: boolean
  }
  interface Props {
    items: Array<any>
    headers: Array<Header>
    loading?: boolean
  }
  interface State {
    sortColumn: string
    ascending: boolean
    tableItems: Array<any>
  }
  let props= defineProps<Props>()
  const state: State = reactive({
    sortColumn: '',
    ascending: false,
    tableItems: [],
  })

  watch(
    () => _.cloneDeep(props.items),
    (newValue, oldValue) => {
     state.tableItems = newValue
    },
    { deep: true }
  )

  function headerRender(item: object, path: string) {
    return _.get(item, path, '')
  }

  function toggleSort(header: Header) {
    if (!header.sortable) return
    if (state.sortColumn === header.text) {
      state.ascending = !state.ascending
    } else {
      state.ascending = true
      state.sortColumn = header.text
    }

    var ascending = state.ascending

    state.tableItems.sort(function (a, b) {
      if (getItemValue(a, header.value) > getItemValue(b, header.value)) {
        return ascending ? 1 : -1
      }
      if (getItemValue(a, header.value) < getItemValue(b, header.value)) {
        return ascending ? -1 : 1
      }
      return 0
    })

    function getItemValue(item: object, path: string) {
      return _.get(item, path, '')
    }
  }
</script>

<style scoped></style>
