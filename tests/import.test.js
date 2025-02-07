describe("import vue component", () => {
  test("normal imports are expected", async () => {
    const cmp = await import(
      "../app/components/transition/KeepAliveComponent.vue"
    );
    expect(cmp).toBeDefined();
  });
  test("dynamic imports are expected", async () => {
    const file1 = "TransitionComponent";
    const file2 = "TransitionGroupComponent";
    const comp1 = await import(`../app/components/transition/${file1}.vue`);
    const comp2 = await import(`../app/components/transition/${file2}.vue`);
    expect(comp1).toBeDefined();
    expect(comp2).toBeDefined();
  });
});
