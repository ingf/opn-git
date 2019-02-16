import test from 'ava';
import execa from 'execa';

test('main', async t => {
  const {stdout} = await execa('./opengit.js', ['--version']);
  t.true(stdout.length > 0);
});
