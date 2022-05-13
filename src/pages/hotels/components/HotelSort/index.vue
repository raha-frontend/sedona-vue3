<template>
  <section class="hotels__found section__border-bottom">
    <label for="found" class="hotels__found-title">Найдено гостиниц: 38</label>
    <select name="" id="found">
      <option selected value="cheap">Сначала дешёвые</option>
      <option value="medium">Средние</option>
      <option value="expensive">Дорогие</option>
    </select>
    <div class="hotels__found-btns">
      <button class="hotels__found-btn found__btn-first"></button>
      <button class="hotels__found-btn found__btn-second"></button>
      <button
        class="hotels__found-btn found__btn-active found__btn-third"
      ></button>
    </div>
  </section>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "HotelSort",
});
</script>

<style lang="scss" scoped>
.hotels__found {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 42px 0;
}

.hotels__found-title {
  font-weight: 700;
  font-size: 30px;
  line-height: 39px;
  text-transform: uppercase;
  margin-right: 130px;
}

select {
  cursor: pointer;
  width: 287px;
  padding: 11px 3px;
  font-size: 18px;
  border: 2px solid #e6e6e6;
  border-radius: 4px;
}

select:hover,
select:focus {
  border: 2px solid #83b3d3;
}

select:active {
  opacity: 0.3;
}

.hotels__found-btns {
  display: flex;
  align-items: center;
}

.hotels__found-btn {
  background-position: center;
  background-repeat: no-repeat;
  width: 16px;
  height: 14px;
  background-color: #fff;
  border: 2px solid #e6e6e6;
  border-radius: 4px;
  padding: 22px;
  margin-left: 8px;
}

.hotels__found-btn:hover,
.hotels__found-btn:focus {
  border: 2px solid #83b3d3;
}

.hotels__found-btn:active {
  border: 2px solid #000000;
}

.found__btn-active {
  border: 2px solid #000;
}

.found__btn-first {
  background-image: url(../../../../assets/images/found-btn-first.svg);
}

.found__btn-second {
  background-image: url(../../../../assets/images/found-btn-second.svg);
}

.found__btn-third {
  background-image: url(../../../../assets/images/found-btn-third.svg);
}
</style>
